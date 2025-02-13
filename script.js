const messages = [
    "Are you sure?",
    "Are you really sure Mr??",
    "Are you like positive?",
    "Mr please 🥺",
    "Just think about it! (I Love You 😳",
    "If you say no, I will be really sad...",
    "I will be really really sad...",
    "I will be really Really REALLY Sad, beyond the sadness you could imagine!",
    "Ok fine then Mr, be that way 😡...",
    "Go and live your life without me 😔",
    "BE GAY! DO CRIME! 😡 i don't care",
    "I will go now ",
    "Just kidding, say Yes pretty Please!!! 🥺❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}