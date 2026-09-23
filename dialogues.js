// Интерактивные диалоги: ты выбираешь реплику, собеседник отвечает. Слова в репликах можно нажимать.
// nodes: { npc: реплика собеседника, tr: перевод, options: [{ text, tr, next, bad }], end: true }
window.DIALOGUES = [
  {
    id: "cafe", icon: "☕", title: "In the Café", level: "A2", who: "Tom, the café owner", start: "n1",
    nodes: {
      n1: { npc: "Good morning! What can I get you?", tr: "Доброе утро! Что вам принести?", options: [
        { text: "Could I have a cappuccino, please?", tr: "Можно мне капучино, пожалуйста?", next: "n2" },
        { text: "Give me coffee.", tr: "Дай мне кофе.", next: "n1b", bad: true },
        { text: "Hello! Do you have tea?", tr: "Здравствуйте! У вас есть чай?", next: "n1t" },
      ] },
      n1b: { npc: "Of course. A small tip: it sounds friendlier to say \"Could I have..., please?\"", tr: "Конечно. Маленький совет: дружелюбнее звучит «Could I have…, please?»", options: [
        { text: "Sorry! Could I have a cappuccino, please?", tr: "Извините! Можно мне капучино, пожалуйста?", next: "n2" },
      ] },
      n1t: { npc: "Yes, we have black tea, green tea and mint tea.", tr: "Да, есть чёрный, зелёный и мятный чай.", options: [
        { text: "Green tea, please.", tr: "Зелёный, пожалуйста.", next: "n2" },
        { text: "Actually, a cappuccino, please.", tr: "Вообще-то, капучино, пожалуйста.", next: "n2" },
      ] },
      n2: { npc: "Regular or large?", tr: "Обычный или большой?", options: [
        { text: "Regular, please.", tr: "Обычный, пожалуйста.", next: "n3" },
        { text: "Large, please.", tr: "Большой, пожалуйста.", next: "n3" },
        { text: "Yes.", tr: "Да.", next: "n2b", bad: true },
      ] },
      n2b: { npc: "Sorry, which one: regular or large?", tr: "Простите, какой именно: обычный или большой?", options: [
        { text: "Regular, please.", tr: "Обычный, пожалуйста.", next: "n3" },
      ] },
      n3: { npc: "Would you like anything to eat? The carrot cake is fresh.", tr: "Хотите что-нибудь поесть? Морковный торт свежий.", options: [
        { text: "Yes, a piece of carrot cake, please.", tr: "Да, кусочек морковного торта, пожалуйста.", next: "n4" },
        { text: "No, thank you. Just the coffee.", tr: "Нет, спасибо. Только кофе.", next: "n4" },
      ] },
      n4: { npc: "Eat in or take away?", tr: "Здесь или с собой?", options: [
        { text: "Eat in, please.", tr: "Здесь, пожалуйста.", next: "n5" },
        { text: "Take away, please.", tr: "С собой, пожалуйста.", next: "n5" },
        { text: "Sorry, can you say it again, please?", tr: "Простите, можете повторить?", next: "n4b" },
      ] },
      n4b: { npc: "Sure! Do you want to drink it here, or take it with you?", tr: "Конечно! Хотите выпить здесь или взять с собой?", options: [
        { text: "Here, please.", tr: "Здесь, пожалуйста.", next: "n5" },
        { text: "With me, please.", tr: "С собой, пожалуйста.", next: "n5" },
      ] },
      n5: { npc: "That's four pounds fifty. Card or cash?", tr: "Четыре фунта пятьдесят. Картой или наличными?", options: [
        { text: "Card, please.", tr: "Картой, пожалуйста.", next: "n6" },
        { text: "Cash, please. Here you are.", tr: "Наличными. Вот, пожалуйста.", next: "n6" },
      ] },
      n6: { npc: "Thank you! Your order will be ready in a minute.", tr: "Спасибо! Ваш заказ будет готов через минуту.", options: [
        { text: "Thank you! Have a nice day.", tr: "Спасибо! Хорошего дня.", next: "end" },
        { text: "Thanks. See you!", tr: "Спасибо. Увидимся!", next: "end" },
      ] },
      end: { npc: "Enjoy your coffee! See you next time.", tr: "Приятного кофе! До следующего раза.", end: true },
    },
  },
  {
    id: "station", icon: "🚆", title: "At the Station", level: "A2", who: "Ticket office clerk", start: "n1",
    nodes: {
      n1: { npc: "Hello. Where would you like to go?", tr: "Здравствуйте. Куда вы хотите поехать?", options: [
        { text: "A ticket to London, please.", tr: "Билет до Лондона, пожалуйста.", next: "n2" },
        { text: "London.", tr: "Лондон.", next: "n1b", bad: true },
      ] },
      n1b: { npc: "Sure. By the way, people usually add \"please\", it sounds more polite.", tr: "Конечно. Кстати, обычно добавляют «please» — звучит вежливее.", options: [
        { text: "Sorry! A ticket to London, please.", tr: "Извините! Билет до Лондона, пожалуйста.", next: "n2" },
      ] },
      n2: { npc: "Single or return?", tr: "В одну сторону или туда-обратно?", options: [
        { text: "Return, please. I'm coming back this evening.", tr: "Туда-обратно. Я возвращаюсь сегодня вечером.", next: "n3" },
        { text: "Single, please.", tr: "В одну сторону, пожалуйста.", next: "n3" },
        { text: "What does \"return\" mean?", tr: "Что значит «return»?", next: "n2b" },
      ] },
      n2b: { npc: "A single is one way. A return is there and back.", tr: "Single — в одну сторону. Return — туда и обратно.", options: [
        { text: "Return, please.", tr: "Туда-обратно, пожалуйста.", next: "n3" },
        { text: "Single, please.", tr: "В одну сторону, пожалуйста.", next: "n3" },
      ] },
      n3: { npc: "When are you travelling?", tr: "Когда вы едете?", options: [
        { text: "Today, the next train.", tr: "Сегодня, ближайшим поездом.", next: "n4" },
        { text: "Tomorrow morning.", tr: "Завтра утром.", next: "n4" },
      ] },
      n4: { npc: "The next train leaves at nine fifteen from platform two. It's twenty-four pounds.", tr: "Ближайший поезд отходит в 9:15 со второй платформы. Стоит 24 фунта.", options: [
        { text: "Is there a cheaper ticket?", tr: "Есть билет подешевле?", next: "n4b" },
        { text: "OK. Card, please.", tr: "Хорошо. Картой, пожалуйста.", next: "n5" },
      ] },
      n4b: { npc: "If you travel after half past nine, an off-peak ticket is fifteen pounds.", tr: "Если поедете после половины десятого, билет вне часа пик стоит 15 фунтов.", options: [
        { text: "Great, the off-peak one, please.", tr: "Отлично, тогда вне часа пик, пожалуйста.", next: "n5" },
        { text: "No, I'm in a hurry. The nine fifteen, please.", tr: "Нет, я спешу. На 9:15, пожалуйста.", next: "n5" },
      ] },
      n5: { npc: "Here's your ticket. Platform two, on the left.", tr: "Вот ваш билет. Вторая платформа, слева.", options: [
        { text: "Thank you! Which way is platform two?", tr: "Спасибо! Как пройти ко второй платформе?", next: "n5b" },
        { text: "Thanks a lot!", tr: "Большое спасибо!", next: "end" },
      ] },
      n5b: { npc: "Go through the doors and turn left. You'll see the sign.", tr: "Пройдите через двери и поверните налево. Увидите указатель.", options: [
        { text: "Got it, thank you!", tr: "Поняла, спасибо!", next: "end" },
      ] },
      end: { npc: "Have a good trip!", tr: "Счастливого пути!", end: true },
    },
  },
  {
    id: "doctor", icon: "🩺", title: "At the Doctor's", level: "A2", who: "Doctor Lewis", start: "n1",
    nodes: {
      n1: { npc: "Hello, Anna. What seems to be the problem?", tr: "Здравствуйте, Анна. Что вас беспокоит?", options: [
        { text: "I have a headache and a fever.", tr: "У меня болит голова и температура.", next: "n2" },
        { text: "I'm ill.", tr: "Я болею.", next: "n1b" },
        { text: "Nothing, I'm fine.", tr: "Ничего, я в порядке.", next: "n1c", bad: true },
      ] },
      n1b: { npc: "I see. Can you tell me more? Where does it hurt?", tr: "Понятно. Расскажите подробнее. Где болит?", options: [
        { text: "My head hurts, and I feel hot.", tr: "Болит голова, и мне жарко.", next: "n2" },
      ] },
      n1c: { npc: "Then why are you here? Let's try again. What's wrong?", tr: "Тогда зачем вы здесь? Давайте ещё раз. Что случилось?", options: [
        { text: "Sorry. I have a headache and a fever.", tr: "Простите. У меня болит голова и температура.", next: "n2" },
      ] },
      n2: { npc: "How long have you had it?", tr: "Как давно это у вас?", options: [
        { text: "Since yesterday.", tr: "Со вчерашнего дня.", next: "n3" },
        { text: "For three days.", tr: "Три дня.", next: "n3" },
        { text: "What does \"how long\" mean?", tr: "Что значит «how long»?", next: "n2b" },
      ] },
      n2b: { npc: "I mean: when did it start? Yesterday? Last week?", tr: "Я имею в виду: когда это началось? Вчера? На прошлой неделе?", options: [
        { text: "It started yesterday.", tr: "Началось вчера.", next: "n3" },
      ] },
      n3: { npc: "Do you have a cough or a sore throat?", tr: "Есть кашель или боль в горле?", options: [
        { text: "A little cough, but my throat is fine.", tr: "Небольшой кашель, но горло в порядке.", next: "n4" },
        { text: "No cough, but my throat hurts.", tr: "Кашля нет, но болит горло.", next: "n4" },
      ] },
      n4: { npc: "Let me check your temperature. Thirty-eight point two. It's a cold.", tr: "Давайте измерим температуру. 38,2. Это простуда.", options: [
        { text: "Is it serious?", tr: "Это серьёзно?", next: "n4b" },
        { text: "What should I do?", tr: "Что мне делать?", next: "n5" },
      ] },
      n4b: { npc: "No, don't worry. Rest and drink a lot of water.", tr: "Нет, не волнуйтесь. Отдыхайте и пейте много воды.", options: [
        { text: "OK. Do I need any medicine?", tr: "Хорошо. Мне нужны лекарства?", next: "n5" },
      ] },
      n5: { npc: "Take these tablets twice a day, after food. Come back if it's not better in five days.", tr: "Принимайте эти таблетки два раза в день после еды. Приходите, если через пять дней не станет лучше.", options: [
        { text: "Twice a day: morning and evening?", tr: "Два раза в день — утром и вечером?", next: "n5b" },
        { text: "Thank you, doctor.", tr: "Спасибо, доктор.", next: "end" },
      ] },
      n5b: { npc: "Exactly. And stay at home for a couple of days.", tr: "Именно. И побудьте дома пару дней.", options: [
        { text: "I will. Thank you, doctor.", tr: "Хорошо. Спасибо, доктор.", next: "end" },
      ] },
      end: { npc: "Get well soon!", tr: "Выздоравливайте!", end: true },
    },
  },
  {
    id: "shop", icon: "🧥", title: "In the Clothes Shop", level: "A2", who: "Shop assistant", start: "n1",
    nodes: {
      n1: { npc: "Hi there! Can I help you?", tr: "Здравствуйте! Вам помочь?", options: [
        { text: "Yes, I'm looking for a jacket.", tr: "Да, я ищу куртку.", next: "n2" },
        { text: "No, thanks, I'm just looking.", tr: "Нет, спасибо, я просто смотрю.", next: "n1b" },
      ] },
      n1b: { npc: "No problem. Let me know if you need anything.", tr: "Без проблем. Дайте знать, если что-то понадобится.", options: [
        { text: "Actually, do you have this jacket in blue?", tr: "Вообще-то, есть эта куртка в синем?", next: "n2" },
      ] },
      n2: { npc: "What size are you?", tr: "Какой у вас размер?", options: [
        { text: "Medium, I think.", tr: "Кажется, M.", next: "n3" },
        { text: "I don't know. Can you help me?", tr: "Не знаю. Поможете?", next: "n2b" },
      ] },
      n2b: { npc: "Sure, you look like a medium. Try this one.", tr: "Конечно, на вид у вас M. Примерьте эту.", options: [
        { text: "OK, thank you.", tr: "Хорошо, спасибо.", next: "n3" },
      ] },
      n3: { npc: "Here's a medium in blue. The fitting room is over there.", tr: "Вот M в синем. Примерочная вон там.", options: [
        { text: "Thanks. I'll try it on.", tr: "Спасибо. Примерю.", next: "n4" },
        { text: "Where is the fitting room?", tr: "Где примерочная?", next: "n3b" },
      ] },
      n3b: { npc: "On the right, next to the mirror.", tr: "Справа, рядом с зеркалом.", options: [
        { text: "Got it, thanks.", tr: "Поняла, спасибо.", next: "n4" },
      ] },
      n4: { npc: "How is it?", tr: "Ну как?", options: [
        { text: "It's a bit tight. Do you have a large?", tr: "Немного тесновата. Есть L?", next: "n5" },
        { text: "It's perfect! How much is it?", tr: "Идеально! Сколько стоит?", next: "n6" },
      ] },
      n5: { npc: "Yes, here's a large. Better?", tr: "Да, вот L. Лучше?", options: [
        { text: "Yes, this one fits. How much is it?", tr: "Да, эта подходит. Сколько стоит?", next: "n6" },
      ] },
      n6: { npc: "It's forty-five pounds, but there's a sale: twenty percent off today.", tr: "45 фунтов, но сегодня распродажа: скидка 20%.", options: [
        { text: "Great! I'll take it.", tr: "Отлично! Беру.", next: "n7" },
        { text: "Hmm, that's still expensive. Do you have anything cheaper?", tr: "Хм, всё равно дорого. Есть что-то дешевле?", next: "n6b" },
      ] },
      n6b: { npc: "This one is thirty pounds, but it's only in grey.", tr: "Эта стоит 30 фунтов, но есть только серая.", options: [
        { text: "Grey is fine. I'll take it.", tr: "Серая подойдёт. Беру.", next: "n7" },
        { text: "No, I'll take the blue one.", tr: "Нет, возьму синюю.", next: "n7" },
      ] },
      n7: { npc: "Would you like a bag?", tr: "Пакет нужен?", options: [
        { text: "Yes, please.", tr: "Да, пожалуйста.", next: "end" },
        { text: "No, thanks. I'll wear it now.", tr: "Нет, спасибо. Я сразу надену.", next: "end" },
      ] },
      end: { npc: "Here's your receipt. Have a lovely day!", tr: "Вот ваш чек. Хорошего дня!", end: true },
    },
  },
];
