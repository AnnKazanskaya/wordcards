// Короткие рассказы уровня A1–A2. Каждое слово можно нажать и увидеть перевод.
window.STORIES = [
  {
    id: "new-house", level: "A1", title: "A New House",
    text: `Anna has a new house. The house is small and old. It is in a little town in England. The house has a red door and two windows. There is a garden behind the house. In the garden there is an apple tree.

Anna opens the door with a big key. The rooms are empty. "I need a bed, a table and two chairs," she says. She is happy. Tomorrow she will go to the market and buy some things for her new home.`,
  },
  {
    id: "the-cat", level: "A1", title: "The Cat",
    text: `Every morning a cat comes to Anna's garden. The cat is orange and very fat. It sits under the apple tree and looks at the window.

Anna gives the cat some milk. The cat drinks the milk and says "meow". Now the cat comes every day. Anna calls the cat Biscuit. Biscuit likes to sleep on the warm chair in the kitchen. Anna likes Biscuit very much.`,
  },
  {
    id: "market", level: "A1", title: "At the Market",
    text: `On Saturday Anna goes to the market. The market is big and noisy. People sell fruit, vegetables, bread and cheese.

Anna buys three apples, a loaf of bread and some cheese. "How much is it?" she asks. "Five pounds, please," says the man. Anna pays and says "Thank you." Then she buys a small cake for her tea. She walks home with a heavy bag and a happy face.`,
  },
  {
    id: "rainy-day", level: "A1", title: "A Rainy Day",
    text: `Today it is raining. The sky is grey and the wind is cold. Anna does not want to go out. She makes a cup of tea and sits by the window.

Biscuit the cat sleeps on the sofa. Anna reads a book about gardens. She wants to plant flowers in spring. Outside, the rain falls on the roof. It is quiet and warm in the little house. "A rainy day is a good day for tea and books," Anna thinks.`,
  },
  {
    id: "lost-key", level: "A2", title: "The Lost Key",
    text: `One evening Anna came home late. She looked in her bag for the key, but the key was not there. She checked her pockets. Nothing. "Oh no," she said. "Where is my key?"

It was cold and dark. Anna walked back to the bus stop. She looked on the ground near the bench. Then she remembered: she gave the key to her neighbour, Mrs Brown, because the water pipe was broken. Anna laughed and knocked on Mrs Brown's door. "Come in, dear," said Mrs Brown. "I have your key and some hot soup."`,
  },
  {
    id: "letter", level: "A2", title: "A Letter from a Friend",
    text: `Anna received a letter from her friend Olga in Russia. Olga wrote: "Dear Anna, how is life in England? Is your house nice? Do you have a cat now? Please send me a photo!"

Anna wrote back that evening. She told Olga about the red door, the apple tree and Biscuit. She sent three photos: the house, the garden and the cat on the chair. "Come and visit me in summer," she wrote. "We will drink tea in the garden." Then she put a stamp on the envelope and walked to the post box.`,
  },
  {
    id: "cafe", level: "A2", title: "The Little Café",
    text: `There is a small café near the market. The owner, Tom, makes the best coffee in town. Anna goes there on Sunday mornings.

She always orders a cappuccino and a piece of carrot cake. Tom likes to talk. He tells her about the town, the weather and his old dog. Today Tom asks, "Where are you from, Anna?" "From Russia," she answers. "Your English is very good," he says. Anna smiles. She is still learning, but every week her English gets a little better.`,
  },
  {
    id: "first-day", level: "A2", title: "First Day at Work",
    text: `Anna started her new job on Monday. She works at a small bookshop in the town centre. Her boss, Mrs Green, showed her the shelves, the till and the coffee machine.

At first Anna was nervous. Customers asked questions, and sometimes she did not understand. But she asked them to speak slowly, and everyone was kind. At lunch she ate a sandwich in the park. In the afternoon she sold ten books and helped a boy find a story about dragons. When she came home, Biscuit was waiting at the door. "It was a good day," Anna said.`,
  },
];

// Словарь: слово (базовая форма или как в тексте) → перевод.
// Регулярные окончания (-s, -es, -ed, -ing, -ly, -er) код снимает сам; неправильные формы лежат здесь явно.
window.DICT = {
  // служебные слова
  a: "неопределённый артикль", an: "неопределённый артикль", the: "определённый артикль",
  and: "и", but: "но", or: "или", because: "потому что", that: "что; тот", when: "когда",
  where: "где", how: "как", of: "из; принадлежность", to: "к; в (направление)", in: "в", on: "на",
  at: "у; в; на", by: "у; рядом с; посредством", for: "для", from: "из; от", with: "с", about: "о; около",
  near: "рядом", behind: "позади", under: "под", out: "наружу", outside: "снаружи", back: "назад",
  there: "там; там есть", here: "здесь", then: "затем", now: "сейчас", still: "всё ещё", always: "всегда",
  sometimes: "иногда", every: "каждый", some: "немного; некоторые", much: "много", very: "очень",
  little: "маленький; немного", not: "не", no: "нет", yes: "да", oh: "ох", please: "пожалуйста",
  thank: "благодарить", "thank you": "спасибо", nothing: "ничего", everyone: "все", people: "люди",
  one: "один", two: "два", three: "три", five: "пять", ten: "десять", first: "первый",
  i: "я", me: "мне; меня", my: "мой", you: "ты; вы", your: "твой; ваш", she: "она", her: "её; ей",
  he: "он", his: "его", it: "оно; это", we: "мы", they: "они", them: "их; им",
  this: "этот", these: "эти", // на случай добавления
  // глаголы (базовые и неправильные формы)
  be: "быть", is: "есть (он/она/оно)", are: "есть (мы/вы/они)", was: "был", were: "были", am: "есть (я)",
  have: "иметь", has: "имеет", had: "имел",
  do: "делать", does: "делает", did: "делал", done: "сделано",
  go: "идти", goes: "идёт", went: "пошёл", come: "приходить", came: "пришёл",
  say: "говорить", said: "сказал", says: "говорит", tell: "рассказывать", told: "рассказал",
  give: "давать", gave: "дал", get: "получать; становиться", got: "получил",
  make: "делать; готовить", made: "сделал", take: "брать", took: "взял",
  see: "видеть", saw: "увидел", look: "смотреть", find: "находить", found: "нашёл",
  eat: "есть (кушать)", ate: "ел", drink: "пить", drank: "пил", sleep: "спать", slept: "спал",
  sit: "сидеть", sat: "сидел", buy: "покупать", bought: "купил", sell: "продавать", sold: "продал",
  pay: "платить", paid: "заплатил", write: "писать", wrote: "написал", read: "читать",
  send: "отправлять", sent: "отправил", put: "класть", think: "думать", thought: "думал",
  know: "знать", knew: "знал", understand: "понимать", understood: "понял",
  speak: "говорить", spoke: "говорил", talk: "разговаривать", ask: "спрашивать", answer: "отвечать",
  want: "хотеть", need: "нуждаться", like: "нравиться", love: "любить", call: "звать; называть",
  open: "открывать", close: "закрывать", walk: "идти пешком", run: "бежать", ran: "бежал",
  wait: "ждать", visit: "навещать", help: "помогать", work: "работать", start: "начинать",
  learn: "учить", laugh: "смеяться", smile: "улыбаться", knock: "стучать", check: "проверять",
  remember: "помнить", receive: "получать", show: "показывать", showed: "показал", order: "заказывать",
  plant: "сажать (растения)", fall: "падать", fell: "упал", rain: "дождь; идёт дождь",
  will: "буду (будущее время)", can: "мочь", could: "мог",
  // существительные
  flower: "цветок", house: "дом", home: "дом (родной)", town: "город (небольшой)", centre: "центр", room: "комната",
  door: "дверь", window: "окно", key: "ключ", garden: "сад", tree: "дерево", apple: "яблоко",
  bed: "кровать", table: "стол", chair: "стул", sofa: "диван", kitchen: "кухня", roof: "крыша",
  thing: "вещь", market: "рынок", fruit: "фрукты", vegetable: "овощ", bread: "хлеб", loaf: "буханка",
  cheese: "сыр", cake: "торт; пирожное", tea: "чай", coffee: "кофе", cup: "чашка", milk: "молоко",
  soup: "суп", sandwich: "бутерброд", carrot: "морковь", cappuccino: "капучино", piece: "кусок",
  pound: "фунт (деньги)", bag: "сумка", face: "лицо", man: "мужчина", boy: "мальчик",
  friend: "друг", neighbour: "сосед", owner: "владелец", boss: "начальник", customer: "покупатель",
  cat: "кошка", dog: "собака", dragon: "дракон", morning: "утро", afternoon: "день (после полудня)",
  evening: "вечер", day: "день", week: "неделя", today: "сегодня", tomorrow: "завтра",
  spring: "весна", summer: "лето", weather: "погода", sky: "небо", wind: "ветер", ground: "земля",
  water: "вода", pipe: "труба", pocket: "карман", bus: "автобус", stop: "остановка", bench: "скамейка",
  letter: "письмо", photo: "фото", stamp: "марка", envelope: "конверт", post: "почта", box: "ящик; коробка",
  café: "кафе", cafe: "кафе", book: "книга", bookshop: "книжный магазин", shelf: "полка", shelves: "полки",
  till: "касса", machine: "машина; аппарат", job: "работа (место)", question: "вопрос", lunch: "обед",
  park: "парк", story: "рассказ", life: "жизнь", english: "английский", mrs: "миссис (госпожа)",
  meow: "мяу", biscuit: "печенье (кличка кота)",
  // прилагательные и наречия
  new: "новый", old: "старый", small: "маленький", big: "большой", red: "красный", orange: "оранжевый",
  grey: "серый", green: "зелёный (тж. фамилия Грин)", brown: "коричневый (тж. фамилия Браун)", empty: "пустой", happy: "счастливый",
  fat: "толстый", warm: "тёплый", hot: "горячий", cold: "холодный", dark: "тёмный", late: "поздно",
  noisy: "шумный", heavy: "тяжёлый", quiet: "тихий", rainy: "дождливый", good: "хороший", best: "лучший",
  better: "лучше", nice: "приятный", dear: "дорогой (обращение)", broken: "сломанный", lost: "потерянный",
  nervous: "нервный", kind: "добрый", slow: "медленный", slowly: "медленно",
  // имена собственные
  anna: "Анна (имя)", olga: "Ольга (имя)", tom: "Том (имя)", england: "Англия", russia: "Россия",
  monday: "понедельник", saturday: "суббота", sunday: "воскресенье",
};
