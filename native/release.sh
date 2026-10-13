#!/bin/bash
# Сборка WordCards и отправка в TestFlight (команда KAMA Point s.r.o., Team ID MP367L25PH).
# Запускать в терминале:  cd native && bash release.sh
# Нужно: вход в Xcode своим Apple ID (Xcode › Settings › Accounts) и установленная платформа iOS.
set -eo pipefail
cd "$(dirname "$0")"

echo "› Копирую сайт в приложение"
sh sync.sh

rm -rf build
echo "› Собираю архив (1–3 минуты)"
xcodebuild -quiet -project ios/App/App.xcodeproj -scheme App -configuration Release \
  -destination 'generic/platform=iOS' -archivePath build/App.xcarchive \
  -allowProvisioningUpdates archive

echo "› Отправляю в App Store Connect"
xcodebuild -quiet -exportArchive -archivePath build/App.xcarchive \
  -exportOptionsPlist ExportOptions.plist -exportPath build/export \
  -allowProvisioningUpdates

echo "✓ Отправлено. Через 10–15 минут сборка появится в App Store Connect › TestFlight."
