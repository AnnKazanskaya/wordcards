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

# cap copy: копирует www/ и capacitor.config.json в iOS-проект без обращения к сети
# (cap sync через npx зависал при плохой сети; плагинов у нас нет, поэтому copy достаточно)
./node_modules/.bin/cap copy ios
echo "✓ www/ обновлён, iOS-проект синхронизирован. Дальше: bash release.sh или open ios/App/App.xcodeproj"
