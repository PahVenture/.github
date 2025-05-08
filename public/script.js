document.addEventListener('DOMContentLoaded', function() {

    // --- Countdown Timer ---
    // To show approximately 11 days from now:
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 11); // Add 11 days to the current date
    futureDate.setHours(16, 59, 59, 0); // Optional: set a specific time for that future day

    const countDownDate = futureDate.getTime();
    // const countDownDate = new Date("Dec 19, 2025 16:59:59").getTime(); // Your original future date

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Ensure elements exist before trying to update them
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownFunction);
            const countdownElement = document.getElementById("countdown");
            if (countdownElement) {
                countdownElement.innerHTML = "<div style='width: 100%; text-align: center; font-size: 1.5rem; color: var(--golden-yellow);'><span>🎉</span> ¡Hemos Lanzado! <span>🎉</span></div>";
                countdownElement.style.padding = "20px 0";
            }
        }
    }, 1000);

    // --- Update Copyright Year ---
    if (document.getElementById('currentYear')) {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    }

    // --- Particles.js Configuration ---
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#E0AF4E", "#F5F7F7"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.4,
                        "opacity_min": 0.05,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2.5,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 130,
                    "color": "#E0AF4E",
                    "opacity": 0.15,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 130,
                        "line_opacity": 0.3
                    },
                    "push": {
                        "particles_nb": 3
                    }
                }
            },
            "retina_detect": true
        });
    }
});