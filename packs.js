// Готовые подборки слов. Добавляются как новый набор одним нажатием.
window.PACKS = [
  {
    id: "basics", icon: "👋", name: "Базовые слова", level: "A1",
    words: [
      ["hello", "привет"], ["goodbye", "пока"], ["please", "пожалуйста"], ["thank you", "спасибо"],
      ["yes", "да"], ["no", "нет"], ["sorry", "извини"], ["name", "имя"], ["today", "сегодня"],
      ["tomorrow", "завтра"], ["yesterday", "вчера"], ["good", "хороший"], ["bad", "плохой"],
      ["big", "большой"], ["small", "маленький"],
    ],
  },
  {
    id: "home", icon: "🏠", name: "Дом", level: "A1",
    words: [
      ["house", "дом"], ["door", "дверь"], ["window", "окно"], ["key", "ключ"], ["room", "комната"],
      ["bed", "кровать"], ["table", "стол"], ["chair", "стул"], ["lamp", "лампа"], ["kitchen", "кухня"],
      ["bathroom", "ванная"], ["floor", "пол"], ["wall", "стена"], ["mirror", "зеркало"], ["picture", "картина"],
    ],
  },
  {
    id: "food", icon: "🍎", name: "Еда", level: "A1",
    words: [
      ["apple", "яблоко"], ["bread", "хлеб"], ["cheese", "сыр"], ["meat", "мясо"], ["fish", "рыба"],
      ["egg", "яйцо"], ["milk", "молоко"], ["butter", "масло"], ["salt", "соль"], ["sugar", "сахар"],
      ["rice", "рис"], ["soup", "суп"], ["salad", "салат"], ["breakfast", "завтрак"], ["lunch", "обед"],
      ["dinner", "ужин"], ["sandwich", "бутерброд"], ["cake", "торт"],
    ],
  },
  {
    id: "animals", icon: "🐱", name: "Животные", level: "A1",
    words: [
      ["cat", "кошка"], ["dog", "собака"], ["horse", "лошадь"], ["cow", "корова"], ["bird", "птица"],
      ["mouse", "мышь"], ["rabbit", "кролик"], ["sheep", "овца"], ["pig", "свинья"], ["chicken", "курица"],
      ["duck", "утка"], ["fox", "лиса"], ["bear", "медведь"], ["wolf", "волк"], ["frog", "лягушка"],
    ],
  },
  {
    id: "shop", icon: "🛒", name: "Магазин", level: "A1",
    words: [
      ["money", "деньги"], ["price", "цена"], ["bag", "сумка"], ["buy", "покупать"], ["sell", "продавать"],
      ["cheap", "дешёвый"], ["expensive", "дорогой"], ["shop", "магазин"], ["basket", "корзина"],
      ["customer", "покупатель"], ["cashier", "кассир"], ["receipt", "чек"], ["change", "сдача"],
      ["free", "бесплатный"], ["sale", "распродажа"],
    ],
  },
  {
    id: "nature", icon: "🌳", name: "Природа", level: "A1",
    words: [
      ["tree", "дерево"], ["flower", "цветок"], ["river", "река"], ["sea", "море"], ["mountain", "гора"],
      ["sun", "солнце"], ["moon", "луна"], ["sky", "небо"], ["cloud", "облако"], ["rain", "дождь"],
      ["snow", "снег"], ["wind", "ветер"], ["forest", "лес"], ["leaf", "лист"], ["stone", "камень"],
    ],
  },
  {
    id: "emotions", icon: "🌟", name: "Эмоции и характер", level: "A2",
    words: [
      ["proud", "гордый"], ["shy", "стеснительный"], ["brave", "смелый"], ["jealous", "ревнивый"],
      ["anxious", "тревожный"], ["confident", "уверенный"], ["curious", "любопытный"], ["lonely", "одинокий"],
      ["polite", "вежливый"], ["rude", "грубый"], ["honest", "честный"], ["lazy", "ленивый"],
      ["generous", "щедрый"], ["stubborn", "упрямый"], ["embarrassed", "смущённый"],
    ],
  },
  {
    id: "work", icon: "💼", name: "Работа", level: "A2",
    words: [
      ["meeting", "встреча"], ["deadline", "крайний срок"], ["project", "проект"], ["salary", "зарплата"],
      ["interview", "собеседование"], ["resume", "резюме"], ["colleague", "коллега"], ["schedule", "расписание"],
      ["manager", "менеджер"], ["training", "обучение"], ["contract", "контракт"], ["experience", "опыт"],
      ["promotion", "повышение"], ["task", "задача"], ["skill", "навык"],
    ],
  },
  {
    id: "travel", icon: "🧳", name: "Путешествия", level: "A2",
    words: [
      ["flight", "рейс"], ["luggage", "багаж"], ["passport", "паспорт"], ["boarding", "посадка"],
      ["customs", "таможня"], ["currency", "валюта"], ["journey", "путешествие"], ["departure", "отправление"],
      ["arrival", "прибытие"], ["accommodation", "проживание"], ["tourist", "турист"], ["souvenir", "сувенир"],
      ["abroad", "за границей"], ["map", "карта"], ["delay", "задержка"],
    ],
  },
  {
    id: "health", icon: "🏥", name: "Здоровье", level: "A2",
    words: [
      ["illness", "болезнь"], ["headache", "головная боль"], ["fever", "температура"], ["cough", "кашель"],
      ["pharmacy", "аптека"], ["surgery", "операция"], ["allergy", "аллергия"], ["exhausted", "измотанный"],
      ["dizzy", "головокружение"], ["treatment", "лечение"], ["pain", "боль"], ["doctor", "врач"],
      ["nurse", "медсестра"], ["recovery", "выздоровление"], ["symptom", "симптом"],
    ],
  },
  {
    id: "tech", icon: "💻", name: "Техника", level: "A2",
    words: [
      ["device", "устройство"], ["software", "программа"], ["password", "пароль"], ["download", "скачать"],
      ["upload", "загрузить"], ["browser", "браузер"], ["application", "приложение"], ["charger", "зарядка"],
      ["screen", "экран"], ["keyboard", "клавиатура"], ["headphones", "наушники"], ["notification", "уведомление"],
      ["settings", "настройки"], ["update", "обновление"], ["wireless", "беспроводной"],
    ],
  },
  {
    id: "cooking", icon: "🍳", name: "Готовка", level: "A2",
    words: [
      ["recipe", "рецепт"], ["ingredient", "ингредиент"], ["chop", "нарезать"], ["slice", "резать ломтиками"],
      ["stir", "мешать"], ["bake", "печь"], ["boil", "кипятить"], ["fry", "жарить"], ["taste", "вкус"],
      ["flavor", "аромат"], ["sweet", "сладкий"], ["sour", "кислый"], ["bitter", "горький"],
      ["spicy", "острый"], ["fresh", "свежий"],
    ],
  },
  {
    id: "verbs", icon: "🏃", name: "Глаголы действия", level: "B1",
    words: [
      ["achieve", "достигать"], ["decide", "решать"], ["complain", "жаловаться"], ["manage", "справляться"],
      ["suggest", "предлагать"], ["prefer", "предпочитать"], ["mention", "упоминать"], ["recognize", "узнавать"],
      ["realize", "осознавать"], ["admit", "признавать"], ["deny", "отрицать"], ["prove", "доказывать"],
      ["prevent", "предотвращать"], ["avoid", "избегать"], ["encourage", "поощрять"],
    ],
  },
  {
    id: "phrases", icon: "💬", name: "Разговорные фразы", level: "B1",
    words: [
      ["never mind", "не важно"], ["take your time", "не торопись"], ["it depends", "смотря как"],
      ["I'm afraid", "боюсь, что"], ["by the way", "кстати"], ["as far as I know", "насколько я знаю"],
      ["make sense", "иметь смысл"], ["get along", "ладить"], ["look forward to", "ждать с нетерпением"],
      ["run out of", "исчерпать"], ["figure out", "разобраться"], ["give up", "сдаваться"],
      ["put off", "откладывать"], ["turn out", "оказываться"], ["catch up", "нагнать"],
    ],
  },
];
