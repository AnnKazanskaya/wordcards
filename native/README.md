# WordCards для iPhone (TestFlight)

Это нативная оболочка сайта WordCards: тот же сайт, упакованный в приложение
через Capacitor. Сайт лежит в корне репозитория, здесь только обёртка.

Аккаунт разработчика: команда **KAMA Point s.r.o.** (Team ID `MP367L25PH`),
Анна в ней с ролью Admin. Bundle ID приложения: `com.annakazanskaya.wordcards`.

## Что нужно один раз

1. **Войти в Xcode своим Apple ID** (тем, что в команде KAMA):
   Xcode › Settings › Accounts › «+» › Apple ID. После входа в списке
   команд должна появиться KAMA Point s.r.o.
2. **Установить платформу iOS** (иначе Xcode пишет «iOS 26.5 is not installed»):
   Xcode › Settings › Components › iOS 26.5 › «Get», около 8 ГБ.
   Или в терминале:

   ```bash
   xcodebuild -downloadPlatform iOS
   ```

3. **Создать запись приложения в App Store Connect** (appstoreconnect.apple.com):
   My Apps › «+» › New App: платформа iOS, имя `WordCards`, язык Russian,
   Bundle ID `com.annakazanskaya.wordcards` (появится в списке после первой
   сборки в Xcode, она регистрирует его автоматически), SKU `wordcards`.

## Как отправить сборку в TestFlight

В терминале:

```bash
cd ~/Desktop/Учёба/study/wordcards/native && bash release.sh
```

Скрипт копирует свежий сайт в приложение, собирает архив и загружает его
в App Store Connect. Номер сборки Xcode увеличивает сам.

Через 10–15 минут: App Store Connect › WordCards › TestFlight › добавить себя
в Internal Testing. На iPhone поставить приложение **TestFlight**, в нём
появится WordCards. Каждое следующее обновление сайта: снова `bash release.sh`.

Тот же путь руками через Xcode: `npm run open`, выбрать Any iOS Device,
Product › Archive › Distribute App › TestFlight & App Store › Upload.

## Что важно знать

- Иконки и заставка уже сгенерированы (`npm run icons` пересоздаёт их из `assets/logo.png`).
- `npm run sync` только обновляет `www/` и iOS-проект без сборки.
- Пакетный менеджер: Swift Package Manager, CocoaPods не нужен.
- Service worker в оболочке отключён (WKWebView его не поддерживает), сайт
  целиком лежит внутри приложения.
- Распознавание речи (упражнение «Произношение») в WKWebView недоступно, в
  оболочке кнопка микрофона работать не будет. Озвучка слов работает.
  Чтобы включить микрофон, позже можно подключить плагин
  `@capacitor-community/speech-recognition`.
- Папки `node_modules/`, `www/`, `build/` и `ios/App/App/public/` в git не
  попадают, они пересоздаются командами `npm install`, `npm run sync`, `release.sh`.
