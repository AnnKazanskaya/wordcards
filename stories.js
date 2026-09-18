// Короткие рассказы A1–B1. Каждое слово можно нажать и увидеть перевод.
// tasks: задания после чтения. type: "tf" (верно/неверно, a: true/false),
// "mc" (выбор ответа, a: индекс), "gap" (вставь слово, a: индекс). e — подсказка-цитата при ошибке.
window.STORIES = [
  {
    id: "new-house", level: "A1", title: "A New House",
    text: `Anna has a new house. The house is small and old. It is in a little town in England. The house has a red door and two windows. There is a garden behind the house. In the garden there is an apple tree.

Anna opens the door with a big key. The rooms are empty. "I need a bed, a table and two chairs," she says. She is happy. Tomorrow she will go to the market and buy some things for her new home.`,
    tasks: [
      { type: "tf", q: "The house is in a big city.", a: false, e: "It is in a little town in England." },
      { type: "mc", q: "How many windows does the house have?", options: ["One", "Two", "Three"], a: 1, e: "The house has a red door and two windows." },
      { type: "mc", q: "What is in the garden?", options: ["An apple tree", "A small pool", "A dog"], a: 0, e: "In the garden there is an apple tree." },
      { type: "gap", q: "The rooms are ___.", options: ["empty", "warm", "noisy"], a: 0, e: "The rooms are empty." },
      { type: "tf", q: "Tomorrow Anna will go to the market.", a: true, e: "Tomorrow she will go to the market and buy some things." },
    ],
  },
  {
    id: "the-cat", level: "A1", title: "The Cat",
    text: `Every morning a cat comes to Anna's garden. The cat is orange and very fat. It sits under the apple tree and looks at the window.

Anna gives the cat some milk. The cat drinks the milk and says "meow". Now the cat comes every day. Anna calls the cat Biscuit. Biscuit likes to sleep on the warm chair in the kitchen. Anna likes Biscuit very much.`,
    tasks: [
      { type: "tf", q: "The cat is black and thin.", a: false, e: "The cat is orange and very fat." },
      { type: "mc", q: "What does Anna give the cat?", options: ["Bread", "Milk", "Fish"], a: 1, e: "Anna gives the cat some milk." },
      { type: "gap", q: "Anna calls the cat ___.", options: ["Biscuit", "Tom", "Apple"], a: 0, e: "Anna calls the cat Biscuit." },
      { type: "mc", q: "Where does Biscuit like to sleep?", options: ["Under the tree", "On the warm chair in the kitchen", "On Anna's bed"], a: 1, e: "Biscuit likes to sleep on the warm chair in the kitchen." },
      { type: "tf", q: "The cat comes every day.", a: true, e: "Now the cat comes every day." },
    ],
  },
  {
    id: "market", level: "A1", title: "At the Market",
    text: `On Saturday Anna goes to the market. The market is big and noisy. People sell fruit, vegetables, bread and cheese.

Anna buys three apples, a loaf of bread and some cheese. "How much is it?" she asks. "Five pounds, please," says the man. Anna pays and says "Thank you." Then she buys a small cake for her tea. She walks home with a heavy bag and a happy face.`,
    tasks: [
      { type: "mc", q: "When does Anna go to the market?", options: ["On Saturday", "On Sunday", "On Monday"], a: 0, e: "On Saturday Anna goes to the market." },
      { type: "tf", q: "The market is small and quiet.", a: false, e: "The market is big and noisy." },
      { type: "gap", q: "Anna buys three ___.", options: ["apples", "eggs", "cakes"], a: 0, e: "Anna buys three apples, a loaf of bread and some cheese." },
      { type: "mc", q: "How much does Anna pay?", options: ["Two pounds", "Five pounds", "Ten pounds"], a: 1, e: "\"Five pounds, please,\" says the man." },
      { type: "tf", q: "Anna walks home with a heavy bag.", a: true, e: "She walks home with a heavy bag and a happy face." },
    ],
  },
  {
    id: "rainy-day", level: "A1", title: "A Rainy Day",
    text: `Today it is raining. The sky is grey and the wind is cold. Anna does not want to go out. She makes a cup of tea and sits by the window.

Biscuit the cat sleeps on the sofa. Anna reads a book about gardens. She wants to plant flowers in spring. Outside, the rain falls on the roof. It is quiet and warm in the little house. "A rainy day is a good day for tea and books," Anna thinks.`,
    tasks: [
      { type: "tf", q: "Today the sun is shining.", a: false, e: "Today it is raining. The sky is grey." },
      { type: "mc", q: "What does Anna make?", options: ["A cup of tea", "A cake", "Soup"], a: 0, e: "She makes a cup of tea and sits by the window." },
      { type: "mc", q: "What is the book about?", options: ["Cats", "Gardens", "London"], a: 1, e: "Anna reads a book about gardens." },
      { type: "gap", q: "She wants to plant ___ in spring.", options: ["flowers", "trees", "apples"], a: 0, e: "She wants to plant flowers in spring." },
      { type: "tf", q: "Biscuit sleeps on the sofa.", a: true, e: "Biscuit the cat sleeps on the sofa." },
    ],
  },
  {
    id: "lost-key", level: "A2", title: "The Lost Key",
    text: `One evening Anna came home late. She looked in her bag for the key, but the key was not there. She checked her pockets. Nothing. "Oh no," she said. "Where is my key?"

It was cold and dark. Anna walked back to the bus stop. She looked on the ground near the bench. Then she remembered: she gave the key to her neighbour, Mrs Brown, because the water pipe was broken. Anna laughed and knocked on Mrs Brown's door. "Come in, dear," said Mrs Brown. "I have your key and some hot soup."`,
    tasks: [
      { type: "mc", q: "Where does Anna look for the key first?", options: ["In her bag", "In the garden", "In the café"], a: 0, e: "She looked in her bag for the key." },
      { type: "tf", q: "Anna finds the key near the bench.", a: false, e: "Then she remembered: she gave the key to her neighbour." },
      { type: "gap", q: "Anna walked back to the ___ stop.", options: ["bus", "train", "market"], a: 0, e: "Anna walked back to the bus stop." },
      { type: "mc", q: "Why did Anna give the key to Mrs Brown?", options: ["Because the water pipe was broken", "Because she lost it", "Because Mrs Brown asked for it"], a: 0, e: "...because the water pipe was broken." },
      { type: "tf", q: "Mrs Brown gives Anna hot soup.", a: true, e: "\"I have your key and some hot soup.\"" },
    ],
  },
  {
    id: "letter", level: "A2", title: "A Letter from a Friend",
    text: `Anna received a letter from her friend Olga in Russia. Olga wrote: "Dear Anna, how is life in England? Is your house nice? Do you have a cat now? Please send me a photo!"

Anna wrote back that evening. She told Olga about the red door, the apple tree and Biscuit. She sent three photos: the house, the garden and the cat on the chair. "Come and visit me in summer," she wrote. "We will drink tea in the garden." Then she put a stamp on the envelope and walked to the post box.`,
    tasks: [
      { type: "mc", q: "Who wrote the letter to Anna?", options: ["Her mother", "Olga", "Tom"], a: 1, e: "Anna received a letter from her friend Olga in Russia." },
      { type: "tf", q: "Olga lives in England.", a: false, e: "...her friend Olga in Russia." },
      { type: "mc", q: "How many photos does Anna send?", options: ["One", "Two", "Three"], a: 2, e: "She sent three photos." },
      { type: "gap", q: "\"Come and visit me in ___.\"", options: ["summer", "winter", "spring"], a: 0, e: "\"Come and visit me in summer,\" she wrote." },
      { type: "tf", q: "Anna sends the letter by email.", a: false, e: "She put a stamp on the envelope and walked to the post box." },
    ],
  },
  {
    id: "cafe", level: "A2", title: "The Little Café",
    text: `There is a small café near the market. The owner, Tom, makes the best coffee in town. Anna goes there on Sunday mornings.

She always orders a cappuccino and a piece of carrot cake. Tom likes to talk. He tells her about the town, the weather and his old dog. Today Tom asks, "Where are you from, Anna?" "From Russia," she answers. "Your English is very good," he says. Anna smiles. She is still learning, but every week her English gets a little better.`,
    tasks: [
      { type: "mc", q: "Who is Tom?", options: ["The owner of the café", "Anna's neighbour", "A tourist"], a: 0, e: "The owner, Tom, makes the best coffee in town." },
      { type: "tf", q: "Anna goes to the café on Saturday mornings.", a: false, e: "Anna goes there on Sunday mornings." },
      { type: "gap", q: "She always orders a cappuccino and a piece of ___ cake.", options: ["carrot", "apple", "chocolate"], a: 0, e: "...a cappuccino and a piece of carrot cake." },
      { type: "mc", q: "What does Tom say about Anna's English?", options: ["It is very good", "It is bad", "He does not understand her"], a: 0, e: "\"Your English is very good,\" he says." },
      { type: "tf", q: "Tom has an old dog.", a: true, e: "He tells her about the town, the weather and his old dog." },
    ],
  },
  {
    id: "first-day", level: "A2", title: "First Day at Work",
    text: `Anna started her new job on Monday. She works at a small bookshop in the town centre. Her boss, Mrs Green, showed her the shelves, the till and the coffee machine.

At first Anna was nervous. Customers asked questions, and sometimes she did not understand. But she asked them to speak slowly, and everyone was kind. At lunch she ate a sandwich in the park. In the afternoon she sold ten books and helped a boy find a story about dragons. When she came home, Biscuit was waiting at the door. "It was a good day," Anna said.`,
    tasks: [
      { type: "mc", q: "Where does Anna work?", options: ["In a café", "In a bookshop", "At the market"], a: 1, e: "She works at a small bookshop in the town centre." },
      { type: "tf", q: "At first Anna was calm and confident.", a: false, e: "At first Anna was nervous." },
      { type: "gap", q: "She asked the customers to speak ___.", options: ["slowly", "loudly", "quickly"], a: 0, e: "But she asked them to speak slowly, and everyone was kind." },
      { type: "mc", q: "How many books did Anna sell in the afternoon?", options: ["Five", "Ten", "Twenty"], a: 1, e: "In the afternoon she sold ten books." },
      { type: "tf", q: "A boy wanted a story about dragons.", a: true, e: "...helped a boy find a story about dragons." },
    ],
  },
  {
    id: "biscuit-missing", level: "A2", title: "Biscuit Goes Missing",
    text: `One morning Biscuit did not come for his milk. Anna waited by the window, but the garden was empty. She called his name and looked under the apple tree. Nothing.

She put on her coat and walked around the town. She asked the man at the market and the woman in the bakery. Nobody had seen an orange cat. Anna felt worried.

At last she came to the café. Tom was laughing. "Is this your cat?" he asked. Biscuit was sitting on a chair near the warm oven, eating a piece of fish. "He came in an hour ago," said Tom. "He likes my kitchen more than yours!" Anna picked up the cat and hugged him. "You are a bad, bad cat," she said, but she was smiling.`,
    tasks: [
      { type: "tf", q: "Biscuit came for his milk as usual.", a: false, e: "One morning Biscuit did not come for his milk." },
      { type: "mc", q: "Who had seen the orange cat?", options: ["The man at the market", "The woman in the bakery", "Nobody"], a: 2, e: "Nobody had seen an orange cat." },
      { type: "mc", q: "Where was Biscuit?", options: ["In the café, near the oven", "Under the apple tree", "At the bus stop"], a: 0, e: "Biscuit was sitting on a chair near the warm oven, eating a piece of fish." },
      { type: "gap", q: "Anna picked up the cat and ___ him.", options: ["hugged", "washed", "fed"], a: 0, e: "Anna picked up the cat and hugged him." },
      { type: "tf", q: "Anna was angry and did not smile.", a: false, e: "\"You are a bad, bad cat,\" she said, but she was smiling." },
    ],
  },
  {
    id: "neighbour-secret", level: "A2", title: "The Neighbour's Secret",
    text: `Mrs Brown lived alone in the house next door. Every evening at seven o'clock she left her house with a big bag and came back an hour later. Anna was curious. Where did she go?

One evening Anna decided to follow her. Mrs Brown walked to the end of the street and went into the old church hall. Anna looked through the window. Inside, twenty people were dancing! Mrs Brown was the teacher. She moved quickly and laughed loudly.

The next day Anna knocked on her door. "I saw you yesterday," she said. "Can I join your class?" Mrs Brown smiled. "Of course, dear. But you must promise one thing: never tell anyone that I am seventy-eight."`,
    tasks: [
      { type: "mc", q: "What time did Mrs Brown leave her house every evening?", options: ["At six", "At seven", "At nine"], a: 1, e: "Every evening at seven o'clock she left her house with a big bag." },
      { type: "tf", q: "Mrs Brown went to the church hall to pray.", a: false, e: "Inside, twenty people were dancing! Mrs Brown was the teacher." },
      { type: "gap", q: "Anna decided to ___ her.", options: ["follow", "call", "help"], a: 0, e: "One evening Anna decided to follow her." },
      { type: "mc", q: "What did Anna ask Mrs Brown the next day?", options: ["Can I join your class?", "Can you teach me to cook?", "Where is your bag?"], a: 0, e: "\"Can I join your class?\"" },
      { type: "mc", q: "What must Anna never tell anyone?", options: ["That Mrs Brown is seventy-eight", "That Mrs Brown dances badly", "That the hall is old"], a: 0, e: "\"...never tell anyone that I am seventy-eight.\"" },
    ],
  },
  {
    id: "trip-london", level: "B1", title: "A Trip to London",
    text: `On Saturday Anna took the early train to London. It was her first visit to the capital, and she wanted to see everything: the river, the big museums, the red buses. The journey took two hours, and she spent most of it looking out of the window.

At Waterloo station she felt lost. There were so many people, and everybody was in a hurry. She checked the map on her phone, but the battery was almost empty. "Excuse me," she said to a woman with a pram, "how do I get to the British Museum?" The woman explained slowly and even walked with her to the right bus stop.

Anna spent three hours in the museum and forgot about lunch. In the evening, tired but happy, she caught the train home. "London is beautiful," she thought, "but I prefer my little town, my garden and my cat."`,
    tasks: [
      { type: "mc", q: "How long did the journey take?", options: ["One hour", "Two hours", "Three hours"], a: 1, e: "The journey took two hours." },
      { type: "tf", q: "Anna felt lost at Waterloo station.", a: true, e: "At Waterloo station she felt lost." },
      { type: "gap", q: "The battery on her phone was almost ___.", options: ["empty", "new", "hot"], a: 0, e: "...but the battery was almost empty." },
      { type: "mc", q: "Who helped Anna find the bus stop?", options: ["A policeman", "A woman with a pram", "Tom"], a: 1, e: "The woman explained slowly and even walked with her to the right bus stop." },
      { type: "tf", q: "In the end Anna decided she prefers London to her town.", a: false, e: "\"...but I prefer my little town, my garden and my cat.\"" },
    ],
  },
  {
    id: "job-interview", level: "B1", title: "The Job Interview",
    text: `Before she got the job at the bookshop, Anna had an interview with Mrs Green. She prepared for a whole week. She read about the shop, practised answers in front of the mirror and chose her best dress.

On the day of the interview her hands were shaking. Mrs Green asked, "Why do you want to work here?" Anna took a deep breath. "Because I love books," she said, "and because I want to talk to people every day. My English is not perfect, but I learn fast." Mrs Green asked a few more questions about her experience and her plans.

At the end Mrs Green stood up and shook her hand. "You start on Monday," she said. Anna walked home so quickly that she almost ran. That evening she bought a small cake to celebrate, and gave half of it to Biscuit.`,
    tasks: [
      { type: "tf", q: "Anna prepared for the interview for one day.", a: false, e: "She prepared for a whole week." },
      { type: "mc", q: "Why does Anna want to work in the bookshop?", options: ["Because she loves books and wants to talk to people", "Because the salary is high", "Because it is near her house"], a: 0, e: "\"Because I love books... and because I want to talk to people every day.\"" },
      { type: "gap", q: "Anna took a deep ___.", options: ["breath", "cup", "step"], a: 0, e: "Anna took a deep breath." },
      { type: "mc", q: "When does Anna start the job?", options: ["On Monday", "On Friday", "Next month"], a: 0, e: "\"You start on Monday,\" she said." },
      { type: "tf", q: "Anna gave half of the cake to Mrs Green.", a: false, e: "...and gave half of it to Biscuit." },
    ],
  },
  {
    id: "village-fair", level: "B1", title: "The Village Fair",
    text: `In August the town held its summer fair. There were stalls with jam, honey and old books, a band that played too loudly, and a competition for the best cake. Mrs Brown told Anna, "You should enter. Your apple cake is wonderful."

Anna was not sure, but she baked the cake anyway, using apples from her own tree. On the day of the fair she put it on the long table next to twelve other cakes. Some of them looked like works of art. Anna's cake looked simple.

The judges walked along the table, tasting each cake and writing notes. Then the mayor read the results. Third place, second place... "And first place goes to the apple cake by Anna!" People clapped. Anna could not believe it. She won a silver cup and a book of recipes. "Next year," said Mrs Brown, "you must teach me."`,
    tasks: [
      { type: "mc", q: "When was the fair?", options: ["In May", "In August", "In December"], a: 1, e: "In August the town held its summer fair." },
      { type: "tf", q: "Anna used apples from the market for her cake.", a: false, e: "...using apples from her own tree." },
      { type: "mc", q: "How many other cakes were on the table?", options: ["Five", "Twelve", "Twenty"], a: 1, e: "...next to twelve other cakes." },
      { type: "gap", q: "Anna won a silver ___ and a book of recipes.", options: ["cup", "spoon", "ring"], a: 0, e: "She won a silver cup and a book of recipes." },
      { type: "tf", q: "Mrs Brown wants Anna to teach her next year.", a: true, e: "\"Next year,\" said Mrs Brown, \"you must teach me.\"" },
    ],
  },
  {
    id: "phone-call", level: "B1", title: "A Phone Call Home",
    text: `On Sunday evening Anna called her mother in Russia. They talked for an hour. Her mother asked about the weather, the neighbours and, of course, the food. "Are you eating enough? Is it always raining there?"

Anna laughed and told her about the fair, the bookshop and Biscuit. Then her mother went quiet for a moment. "Do you miss home?" she asked. Anna looked around her small kitchen: the kettle, the pictures on the wall, the cat asleep on the chair.

"Sometimes," she said honestly. "I miss you, and I miss the snow. But I am happy here, Mum. I have a job, friends and a garden. I think I will stay." Her mother was silent, and then she said, "Then I will come and visit you in spring. Save some apples for me."`,
    tasks: [
      { type: "mc", q: "How long did Anna and her mother talk?", options: ["Ten minutes", "An hour", "All evening"], a: 1, e: "They talked for an hour." },
      { type: "tf", q: "Anna's mother asked about the food.", a: true, e: "Her mother asked about the weather, the neighbours and, of course, the food." },
      { type: "gap", q: "\"I miss you, and I miss the ___.\"", options: ["snow", "sun", "sea"], a: 0, e: "\"I miss you, and I miss the snow.\"" },
      { type: "mc", q: "What does Anna decide?", options: ["To go back to Russia", "To stay in England", "To move to London"], a: 1, e: "\"I think I will stay.\"" },
      { type: "mc", q: "When will Anna's mother visit?", options: ["In spring", "In winter", "Next week"], a: 0, e: "\"Then I will come and visit you in spring.\"" },
    ],
  },
];

// Словарь: слово (базовая форма или как в тексте) → перевод.
// Регулярные окончания (-s, -es, -ed, -ing, -ly, -er) код снимает сам; неправильные формы лежат здесь явно.
window.DICT = {
  // служебные слова
  a: "неопределённый артикль", an: "неопределённый артикль", the: "определённый артикль",
  and: "и", but: "но", or: "или", because: "потому что", that: "что; тот", when: "когда",
  where: "где", how: "как", why: "почему", of: "из; принадлежность", to: "к; в (направление)", in: "в", on: "на",
  at: "у; в; на", by: "у; рядом с; посредством", for: "для", from: "из; от", with: "с", about: "о; около",
  near: "рядом", behind: "позади", under: "под", out: "наружу", outside: "снаружи", back: "назад",
  into: "в (внутрь)", through: "через; сквозь", along: "вдоль", around: "вокруг; по", inside: "внутри",
  up: "вверх; pick up — поднять", flower: "цветок",
  before: "до; перед", after: "после", than: "чем", so: "так; поэтому", too: "тоже; слишком", even: "даже",
  there: "там; там есть", here: "здесь", then: "затем", now: "сейчас", still: "всё ещё", always: "всегда",
  sometimes: "иногда", never: "никогда", every: "каждый", each: "каждый (по отдельности)", some: "немного; некоторые",
  much: "много", many: "много (исчисл.)", most: "большинство; больше всего", more: "больше", very: "очень",
  little: "маленький; немного", few: "несколько", other: "другой", own: "собственный", whole: "целый",
  not: "не", no: "нет", yes: "да", oh: "ох", please: "пожалуйста", thank: "благодарить", "thank you": "спасибо",
  nothing: "ничего", nobody: "никто", anyone: "кто-нибудь", everyone: "все", everybody: "все", everything: "всё",
  people: "люди", one: "один", two: "два", three: "три", five: "пять", seven: "семь", eight: "восемь",
  ten: "десять", twelve: "двенадцать", twenty: "двадцать", seventy: "семьдесят",
  first: "первый", second: "второй", third: "третий", last: "последний; at last — наконец", next: "следующий; соседний",
  i: "я", me: "мне; меня", my: "мой", you: "ты; вы", your: "твой; ваш", yours: "твой (без сущ.)", she: "она", her: "её; ей",
  he: "он", his: "его", him: "его; ему", it: "оно; это", its: "его (о предмете)", we: "мы", they: "они", them: "их; им",
  this: "этот", these: "эти", "o'clock": "часов (о времени)",
  // глаголы (базовые и неправильные формы)
  be: "быть", is: "есть (он/она/оно)", are: "есть (мы/вы/они)", was: "был", were: "были", am: "есть (я)",
  have: "иметь", has: "имеет", had: "имел",
  do: "делать", does: "делает", did: "делал", done: "сделано",
  go: "идти", goes: "идёт", went: "пошёл", come: "приходить", came: "пришёл",
  say: "говорить", said: "сказал", says: "говорит", tell: "рассказывать", told: "рассказал",
  give: "давать", gave: "дал", get: "получать; добираться", got: "получил",
  make: "делать; готовить", made: "сделал", take: "брать", took: "взял",
  see: "видеть", saw: "увидел", seen: "виденный (видел)", look: "смотреть", find: "находить", found: "нашёл",
  eat: "есть (кушать)", ate: "ел", drink: "пить", drank: "пил", sleep: "спать", slept: "спал",
  sit: "сидеть", sat: "сидел", buy: "покупать", bought: "купил", sell: "продавать", sold: "продал",
  pay: "платить", paid: "заплатил", write: "писать", wrote: "написал", read: "читать",
  send: "отправлять", sent: "отправил", put: "класть; put on — надевать", think: "думать", thought: "думал",
  know: "знать", knew: "знал", understand: "понимать", understood: "понял",
  speak: "говорить", spoke: "говорил", talk: "разговаривать", ask: "спрашивать", answer: "отвечать; ответ",
  want: "хотеть", need: "нуждаться", like: "нравиться; как", love: "любить", call: "звать; звонить",
  open: "открывать", close: "закрывать", walk: "идти пешком", run: "бежать", ran: "бежал",
  wait: "ждать", visit: "навещать", help: "помогать", work: "работать", start: "начинать",
  learn: "учить", laugh: "смеяться", smile: "улыбаться", knock: "стучать", check: "проверять",
  remember: "помнить", receive: "получать", show: "показывать", showed: "показал", order: "заказывать",
  plant: "сажать (растения)", fall: "падать", fell: "упал", rain: "дождь; идёт дождь",
  will: "буду (будущее время)", can: "мочь", could: "мог", must: "должен", should: "следует",
  leave: "уходить; оставлять", left: "ушёл; левый", feel: "чувствовать", felt: "чувствовал",
  forget: "забывать", forgot: "забыл", catch: "ловить; успеть на", caught: "поймал",
  spend: "тратить; проводить (время)", spent: "провёл", choose: "выбирать", chose: "выбрал",
  stand: "стоять", stood: "встал", shake: "трясти; пожать (руку)", shook: "пожал", hold: "держать; проводить", held: "проводил",
  win: "выигрывать", won: "выиграл", pick: "поднимать; выбирать", hug: "обнимать", worry: "волноваться",
  live: "жить", decide: "решать", follow: "следовать", move: "двигаться", dance: "танцевать", join: "присоединяться",
  promise: "обещать", explain: "объяснять", prefer: "предпочитать", prepare: "готовиться", practise: "тренироваться",
  celebrate: "праздновать", enter: "участвовать; входить", bake: "печь", use: "использовать", taste: "пробовать (на вкус)",
  clap: "хлопать", believe: "верить", teach: "учить (кого-то)", miss: "скучать; пропустить", stay: "оставаться",
  save: "сохранять; беречь", play: "играть", hurry: "спешить", excuse: "извинять; excuse me — извините",
  // существительные
  house: "дом", home: "дом (родной)", town: "город (небольшой)", city: "город (большой)", capital: "столица", centre: "центр",
  room: "комната", door: "дверь", window: "окно", key: "ключ", garden: "сад", tree: "дерево", apple: "яблоко",
  bed: "кровать", table: "стол", chair: "стул", sofa: "диван", kitchen: "кухня", roof: "крыша", wall: "стена",
  oven: "духовка", kettle: "чайник", mirror: "зеркало", picture: "картина", coat: "пальто", dress: "платье",
  thing: "вещь", market: "рынок", stall: "прилавок", fruit: "фрукты", vegetable: "овощ", bread: "хлеб", loaf: "буханка",
  cheese: "сыр", cake: "торт; пирожное", tea: "чай", coffee: "кофе", cup: "чашка; кубок", milk: "молоко",
  soup: "суп", sandwich: "бутерброд", carrot: "морковь", cappuccino: "капучино", piece: "кусок", fish: "рыба",
  jam: "варенье", honey: "мёд", recipe: "рецепт", lunch: "обед", food: "еда",
  pound: "фунт (деньги)", bag: "сумка", face: "лицо", hand: "рука (кисть)", breath: "вдох", man: "мужчина",
  woman: "женщина", boy: "мальчик", mother: "мама", mum: "мама (разг.)", friend: "друг", neighbour: "сосед",
  owner: "владелец", boss: "начальник", customer: "покупатель", teacher: "учитель", judge: "судья", mayor: "мэр",
  cat: "кошка", dog: "собака", dragon: "дракон", band: "музыкальная группа", competition: "конкурс", fair: "ярмарка",
  prize: "приз", place: "место", result: "результат", note: "заметка", art: "искусство", work: "работа; произведение",
  morning: "утро", afternoon: "день (после полудня)", evening: "вечер", day: "день", week: "неделя", year: "год",
  hour: "час", moment: "момент", today: "сегодня", tomorrow: "завтра", yesterday: "вчера", ago: "тому назад", later: "позже",
  spring: "весна", summer: "лето", august: "август", weather: "погода", sky: "небо", wind: "ветер", snow: "снег",
  ground: "земля", water: "вода", pipe: "труба", pocket: "карман", street: "улица", end: "конец",
  bus: "автобус", train: "поезд", station: "вокзал", stop: "остановка", bench: "скамейка", journey: "поездка",
  trip: "поездка", museum: "музей", river: "река", map: "карта", phone: "телефон", battery: "батарея", pram: "коляска",
  letter: "письмо", photo: "фото", stamp: "марка", envelope: "конверт", post: "почта", box: "ящик; коробка",
  café: "кафе", cafe: "кафе", bakery: "пекарня", church: "церковь", hall: "зал", class: "занятие; класс",
  book: "книга", bookshop: "книжный магазин", shop: "магазин", shelf: "полка", shelves: "полки",
  till: "касса", machine: "машина; аппарат", job: "работа (место)", interview: "собеседование", experience: "опыт",
  plan: "план", question: "вопрос", park: "парк", story: "рассказ", life: "жизнь", name: "имя",
  english: "английский", mrs: "миссис (госпожа)", meow: "мяу", biscuit: "печенье (кличка кота)",
  half: "половина", front: "перёд; in front of — перед", course: "курс; of course — конечно", secret: "секрет",
  // прилагательные и наречия
  new: "новый", old: "старый", small: "маленький", big: "большой", long: "длинный", early: "ранний; рано",
  red: "красный", orange: "оранжевый", grey: "серый", green: "зелёный (тж. фамилия Грин)", brown: "коричневый (тж. фамилия Браун)",
  silver: "серебряный", empty: "пустой", happy: "счастливый", sad: "грустный", fat: "толстый", warm: "тёплый",
  hot: "горячий", cold: "холодный", dark: "тёмный", late: "поздно", noisy: "шумный", heavy: "тяжёлый",
  quiet: "тихий", rainy: "дождливый", good: "хороший", bad: "плохой", best: "лучший", better: "лучше",
  nice: "приятный", dear: "дорогой (обращение)", broken: "сломанный", lost: "потерянный", nervous: "нервный",
  kind: "добрый", slow: "медленный", slowly: "медленно", quick: "быстрый", quickly: "быстро", loud: "громкий",
  loudly: "громко", alone: "один (в одиночестве)", curious: "любопытный", worried: "обеспокоенный",
  tired: "уставший", beautiful: "красивый", perfect: "идеальный", fast: "быстро; быстрый", deep: "глубокий",
  sure: "уверенный", wonderful: "чудесный", simple: "простой", right: "правильный; правый", silent: "молчащий",
  asleep: "спящий", enough: "достаточно", honest: "честный", honestly: "честно", almost: "почти",
  anyway: "всё равно; в любом случае", usual: "обычный", missing: "пропавший",
  // имена собственные
  anna: "Анна (имя)", olga: "Ольга (имя)", tom: "Том (имя)", england: "Англия", russia: "Россия", london: "Лондон",
  british: "британский", waterloo: "Ватерлоо (вокзал в Лондоне)",
  monday: "понедельник", friday: "пятница", saturday: "суббота", sunday: "воскресенье",
};
