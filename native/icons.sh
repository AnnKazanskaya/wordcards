#!/bin/sh
# Пересоздаёт иконки и заставку iOS из assets/logo.png и assets/splash.png.
# Запуск: sh icons.sh   (без npm: npm/npx при плохой сети зависают на проверке обновлений)
set -e
cd "$(dirname "$0")"
./node_modules/.bin/capacitor-assets generate --ios \
  --iconBackgroundColor '#171a1f' --iconBackgroundColorDark '#171a1f' \
  --splashBackgroundColor '#171a1f' --splashBackgroundColorDark '#171a1f'
echo "✓ иконки и заставка обновлены"
