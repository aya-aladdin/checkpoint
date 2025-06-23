const typewriterTextElement = document.getElementById('typewriter-text');
const phrases = [
    "Win awesome prizes",
    "3 days of creativity",
    "Learn new skills",
    "Join the community!"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenPhrases = 1500;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typewriterTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(typeWriter, deletingSpeed);
        }
    } else {
        typewriterTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeWriter, delayBetweenPhrases);
        } else {
            setTimeout(typeWriter, typingSpeed);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const fixedNavbar = document.querySelector('.fixed-navbar');
    const headerDiv = document.querySelector('.header-div');

    const scrollThreshold = headerDiv.offsetHeight - fixedNavbar.offsetHeight;

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            fixedNavbar.classList.add('scrolled');
        } else {
            fixedNavbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    typeWriter();
});
