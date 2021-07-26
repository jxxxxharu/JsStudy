const quotes = [
    {
        // 기분이 태도가 되지 말자
        quote: "Don`t let your emotion impact on your attitude.",
        author: "unknown",
    },
    {
        // 지나간 슬픔에 새 눈물을 낭비하지 말라.
        quote: "Waste not fresh tears over old griefs.",
        author: "Euripides",
    },
    {
        // 마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.
        quote: "You shouldn't just have a heart. It must be put into practice.",
        author: "Bruce Lee",
    },
    {
        // 너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다 . 더 많이 실험할수록 더나아진다
        quote: "Don't be too timid and squeamish about your actions. All life is an experiment. The more experiments you make the better.",
        author: "Ralph Waldo Emerson",
    },
    {
        // 인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "Lolly Daskal",
    },
    {
        // 과거에서 교훈을 얻을 수는 있어도, 과거 속에 살 수는 없다.
        quote: "We can draw lessons from the past, but we cannot live in it.",
        author: "Lyndon B. Johnson",
    },
    {
        // 미래를 신뢰하지 마라, 죽은 과거는 묻어버려라, 그리고 살아있는 현재에 행동하라.
        quote: "Trust no Future, however pleasant! Let the dead Past bury its dead! Act, - act in the living Present!",
        author: "Henry Wadsworth Longfellow",
    },
    {
        // 우리가 해야할 일은 끊임없이 호기심을 갖고 새로운 생각을 시험해보고 새로운 인상을 받는 것이다.
        quote: "What we have to do is to be forever curiously testing new opinions and courting new impressions.",
        author: "Walter Pater",
    },
    {
        // 작은 일에 거창한 말을 사용하는 습관을 피해라.
        quote: "Do not accustom yourself to use big words for little matters.",
        author: "unknown",
    },
    {
        // 우리를 조금 크게 만드는데 걸리는 시간은 단 하루면 충분하다.
        quote: "A single day is enough to make us a little larger.",
        author: "Paul Klee",
    }
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

//console.log(quotes[Math.floor(Math.random() * 10)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;