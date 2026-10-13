# WordCards для iPhone (TestFlight)

Это нативная оболочка сайта WordCards: тот же сайт, упакованный в приложение
через Capacitor. Сайт лежит в корне репозитория, здесь только обёртка.

## Что нужно один раз

1. **Платный аккаунт Apple Developer** (99 $/год, developer.apple.com).
   Без него TestFlight не работает. Бесплатный Apple ID позволяет только
   поставить приложение на свой iPhone кабелем на 7 дней.
2. Xcode (уже стоит). В Xcode: **Settings › Accounts › «+»** и войти своим Apple ID.
3. На сайте App Store Connect (appstoreconnect.apple.com) создать приложение:
   **My Apps › «+» › New App**, платформа iOS, имя `WordCards`,
   Bundle ID `com.annakazanskaya.wordcards` (его нужно сначала зарегистрировать
   в developer.apple.com › Identifiers, можно прямо из Xcode при выборе Team).

4. В Xcode не установлена платформа iOS (при сборке пишет
   «iOS 26.5 is not installed»). Один раз: **Xcode › Settings › Components**,
   напротив **iOS 26.5** нажать «Get» (скачивание около 8 ГБ). Или в терминале:

   ```bash
   xcodebuild -downloadPlatform iOS
   ```

## Как собрать и отправить в TestFlight

В терминале, в папке `native`:

```bash
npm run sync
```

Это копирует свежий сайт в `www/` и обновляет iOS-проект. Потом:

```bash
npm run open
```

Откроется Xcode. Дальше в Xcode:

1. Слева выбрать проект **App**, вкладка **Signing & Capabilities**,
   включить **Automatically manage signing** и выбрать свою **Team**.
2. Сверху выбрать устройство **Any iOS Device (arm64)**.
3. Меню **Product › Archive**. Подождать 1–3 минуты.
4. В открывшемся окне **Distribute App › TestFlight & App Store › Upload**,
   везде «Next», в конце «Upload».
5. Через 5–15 минут сборка появится в App Store Connect › TestFlight.
   Там добавить себя как тестировщика (Internal Testing) и установить
   приложение **TestFlight** на iPhone, в нём появится WordCards.

Каждое следующее обновление: `npm run sync`, в Xcode увеличить **Build**
(General › Identity › Build: 1 › 2 › 3…), снова **Product › Archive › Upload**.

## Что важно знать

- Иконки и заставка уже сгенерированы (`npm run icons` пересоздаёт их из `assets/logo.png`).
- Пакетный менеджер: Swift Package Manager, CocoaPods не нужен.
- Service worker в оболочке отключён (WKWebView его не поддерживает), сайт и так
  целиком лежит внутри приложения.
- Распознавание речи (упражнение «Произношение») в WKWebView недоступно, в
  оболочке кнопка микрофона работать не будет. Озвучка слов работает.
  Чтобы включить микрофон, позже можно подключить плагин
  `@capacitor-community/speech-recognition`.
- Папки `node_modules/`, `www/` и `ios/App/App/public/` в git не попадают,
  они пересоздаются командами `npm install` и `npm run sync`.
