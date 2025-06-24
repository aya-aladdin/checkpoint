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

    function initParticleBackground() {
        const canvas = document.createElement("canvas");
        canvas.id = "particle-background";
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.zIndex = "0";
        canvas.style.opacity = "0.4";
        document.body.prepend(canvas);

        const ctx = canvas.getContext("2d");
        let particles = [];
        const accentColors = [
            "106, 35, 229",
            "110, 135, 232",
            "209, 41, 200",
            "43, 232, 198",
            "99, 161, 240",
            "48, 143, 243"
        ];
        const particleCount = 80;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 1,
                    color: accentColors[Math.floor(Math.random() * accentColors.length)],
                    speedX: (Math.random() - 0.5) * 1,
                    speedY: (Math.random() - 0.5) * 1,
                    life: Math.random() * 250 + 150,
                    maxLife: Math.random() * 250 + 150,
                });
            }
        }

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                let opacity = 1;
                if (particle.life < particle.maxLife * 0.2) {
                    opacity = particle.life / (particle.maxLife * 0.2);
                } else if (particle.life > particle.maxLife * 0.8) {
                    opacity = (particle.maxLife - particle.life) / (particle.maxLife * 0.2);
                }
                
                opacity = Math.max(0, Math.min(1, opacity));
                
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particle.color}, ${opacity})`;
                ctx.fill();

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                particle.life--;

                if (particle.life <= 0 || particle.x < -particle.radius || particle.x > canvas.width + particle.radius || particle.y < -particle.radius || particle.y > canvas.height + particle.radius) {
                    particles[index] = {
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        radius: Math.random() * 2 + 1,
                        color: accentColors[Math.floor(Math.random() * accentColors.length)],
                        speedX: (Math.random() - 0.5) * 1,
                        speedY: (Math.random() - 0.5) * 1,
                        life: Math.random() * 250 + 150,
                        maxLife: Math.random() * 250 + 150,
                    };
                }
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 90) {
                        const lineOpacity = Math.min(
                            (particles[i].life / particles[i].maxLife),
                            (particles[j].life / particles[j].maxLife)
                        ) * (0.2 - distance / 900);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${particles[i].color}, ${lineOpacity})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawParticles);
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        createParticles();
        drawParticles();
    }

    initParticleBackground();
});
