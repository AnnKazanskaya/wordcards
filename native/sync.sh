#!/bin/sh
# Копирует сайт из корня репозитория в www/ и обновляет iOS-проект.
# Запускать после каждого изменения сайта, перед сборкой в Xcode:  sh sync.sh
set -e
cd "$(dirname "$0")"

rm -rf www && mkdir www
rsync -a \
  --exclude '.git' --exclude '.claude' --exclude 'native' --exclude '.DS_Store' \
  --exclude 'migration.sql' --exclude '*.md' --exclude 'service-worker.js' \
  ../ www/

# В нативной оболочке service worker не нужен (WKWebView его не поддерживает),
# поэтому убираем его регистрацию из app.js в копии
sed -i '' 's/navigator.serviceWorker.register("service-worker.js")/Promise.resolve()/' www/app.js

# Копируем www/ прямо в iOS-проект, без Capacitor CLI: `cap copy` на этом Маке зависает
# (node_modules лежит в папке под iCloud) и 13.11.2026 молча оставил в проекте старую версию сайта.
# Плагинов у нас нет, поэтому хватает копирования файлов. cordova.js и cordova_plugins.js
# создал cap при первой настройке, их сохраняем. Если изменится capacitor.config.json,
# его копию ios/App/App/capacitor.config.json надо обновить через `cap copy ios` вручную.
rsync -a --delete --exclude 'cordova.js' --exclude 'cordova_plugins.js' www/ ios/App/App/public/

# Страховка: в iOS-проекте должна лежать та же версия сайта, что в корне
want=$(grep -o 'app.js?v=[0-9]*' ../index.html | head -1)
got=$(grep -o 'app.js?v=[0-9]*' ios/App/App/public/index.html | head -1)
if [ -z "$want" ] || [ "$want" != "$got" ]; then
  echo "✗ В iOS-проекте не та версия сайта: «$got» вместо «$want». Сборку не продолжаю."
  exit 1
fi
echo "✓ www/ обновлён, iOS-проект синхронизирован ($got). Дальше: bash release.sh или open ios/App/App.xcodeproj"
