const quotes = [
    {
        quote: "He who suffers before it is necessary, suffers more than is necessary.",
        quotee: "Seneca"
    },
    {
        quote: "You become what you give your attention to. If you do not choose what thoughts and images you expose yourself to, someone else will.",
        quotee: "Epitecus"
    },
    {
        quote: "There is a limit to the time assigned to you, and if you don't use it to free yourself it will be gone and wil never return.",
        quotee: "Marcus Aurelius"
    },
    {
        quote: "Talent hits a target no one else can hit. Genius hits a target no one else can see.",
        quotee: "Arthur Schopenhauer"
    },
    {
        quote: "When you arise in the morning, think of what a precious privilige it is to be alive - to breathe, to think, to enjoy, to love.",
        quotee: "Marcus Aurelius"
    },
    {
        quote: "We are what we repeatedly do. Excellence, therefore, is not an act, but a habit.",
        quotee: "Aristotle"
    },
    {
        quote: "It is in the character of very few men to honor without envy a friend who has prospered.",
        quotee: "Aeschylus"
    },
    {
        quote: "I have learned to seek happines by limiting my desires, rather than by trying to satisfy them.",
        quotee: "John Stuart Mill"
    },
    {
        quote: "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.",
        quotee: "David Goggins"
    },
    {
        quote: "Man cannot remake himself without suffering, for he is both the marble and the sculptor.",
        quotee: "Alexis Carrel"
    },
    {
        quote: "Knowing how to think empowers you far beyond those who only know what to think.",
        quotee: "Neil Degrasse Tyson"
    },
    {
        quote: "When a person can't find a deep sense of meaning, they distract themselves with pleasure.",
        quotee: "Viktor Frankl"
    },
    {
        quote: "Expectations are the greatest impediment to living. In anticipation of tomorrow, we lose today.",
        quotee: "Seneca"
    },
    {
        quote: "Another person cannot hurt you without your cooperation; you are hurt the moment you believe yourself to be.",
        quotee: "Epitecus"
    },
    {
        quote: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
        quotee: "Steve Jobs"
    },
    {
        quote: "In any given moment we have two options: to step forward into growth or to step back into safety.",
        quotee: "Abraham Maslow"
    },
    {
        quote: "No man is more unhappy than he who never faces adversity. For he is not permitted to prove himself.",
        quotee: "Seneca"
    },
    {
        quote: "People do not decide their futures, they decide their habits and their habits decide their future.",
        quotee: "Freferick M. Alexander"
    },
    {
        quote: "Very little is needed to make a happy life; it is all within yourself in your way of thinking.",
        quotee: "Marcus Aurelius"
    },
    {
        quote: "Desire is a contract that you make with yourself to be unhappy until you get what you want.",
        quotee: "Naval Ravikant"
    },
    {
        quote: "The problem is not the problem, the problem is your actitude about the problem.",
        quotee: "Johnny Depp"
    },
    {
        quote: "How much time one saves who does not look to see what their neighbor says or does or thinks.",
        quotee: "Marcus Aurelius"
    },
    {
        quote: "You have power over your mind, not outside events. Realize this and you will find strength.",
        quotee: "Marcus Aurelius"
    },
    {
        quote: "No man ever steps in the same river twice, for it is not the same river, and he is not the same man.",
        quotee: "Heraclitus"
    },
    {
        quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
        quotee: "Haruki Murakami"
    },
    {
        quote: "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.",
        quotee: "Epicurus"
    },
    {
        quote: "Life is so short you can't waste even a day subscribing to what someone thinks you can do versus what you know you can do.",
        quotee: "Virgil Abloh"
    },
    {
        quote: "The greatest danger is not that our aim is too high and we miss it, but that it is too low and we reach it.",
        quotee: "Michelangelo"
    },
];

const quote = document.getElementById("quote");
const quotee = document.getElementById("quotee");
const newQuoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copyBtn");
const theme = document.getElementById("theme");

function pickQuote(){
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const choosenQuote = quotes[quoteIndex];
    quote.textContent = choosenQuote.quote;
    quotee.textContent = "― " + choosenQuote.quotee;
}

function copyQuote() {
    navigator.clipboard.writeText(`"${quote.textContent}"`);       
}

function changeTheme() {
    if (theme.innerHTML === '<img src="./svg/sun.svg">') {
        document.documentElement.style.setProperty('--main-blue', '#59afff');
        document.documentElement.style.setProperty('--blue-shadow', '#3972a8');
        document.documentElement.style.setProperty('--container-bg', '#e9fbff');
        document.documentElement.style.setProperty('--font-color', '#595959');
        theme.innerHTML = '<img src="./svg/moon.svg">';
    } else {
        document.documentElement.style.setProperty('--main-blue', '#152b40');
        document.documentElement.style.setProperty('--blue-shadow', '#09141e');
        document.documentElement.style.setProperty('--container-bg', '#484848');
        document.documentElement.style.setProperty('--font-color', '#e9fbff');
        theme.innerHTML = '<img src="./svg/sun.svg">';
    }
}

pickQuote();

newQuoteBtn.addEventListener("click", pickQuote);

copyBtn.addEventListener("click", copyQuote);

theme.addEventListener("click", changeTheme);