document.addEventListener('DOMContentLoaded', () => {
    const calendarDays = document.getElementById('calendar-days');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');

    let currentYear = 2025;
    let currentMonth = 8;

    const checkpointDates = {
        month: 8,
        year: 2025,
        startDay: 5,
        endDay: 7
    };

    function renderCalendar() {
        calendarDays.innerHTML = '';
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        currentMonthYear.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty');
            calendarDays.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            dayDiv.classList.add('current-month');

            if (currentYear === checkpointDates.year &&
                currentMonth === checkpointDates.month &&
                day >= checkpointDates.startDay &&
                day <= checkpointDates.endDay) {
                dayDiv.classList.add('highlight');
            }

            calendarDays.appendChild(dayDiv);
        }
    }

    prevMonthBtn.style.display = 'none';
    nextMonthBtn.style.display = 'none';

    renderCalendar();

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

    const fixedNavbar = document.querySelector('.fixed-navbar');
    const headerDiv = document.querySelector('.header-div');

    if (headerDiv && fixedNavbar) {
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
    } else {
        console.warn("Could not find '.header-div' or '.fixed-navbar'. Navbar scroll effect may not work.");
    }
    
    typeWriter();

    const faqDetails = document.querySelectorAll('.faq-container details');

    faqDetails.forEach(detail => {
        const summary = detail.querySelector('summary');
        const content = detail.querySelector('.faq-content');

        summary.addEventListener('click', (event) => {
            event.preventDefault();

            if (detail.hasAttribute('open')) {
                detail.removeAttribute('open');
            } else {
                detail.setAttribute('open', '');
            }
        });
    });
});
