document.addEventListener('DOMContentLoaded', function() {

    // --- Countdown Timer ---
    // Set the date we're counting down to
    // Example: December 19, 2025 16:59:59
    const countDownDate = new Date("Dec 19, 2025 16:59:59").getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownFunction);
            // Make the "Lanzado" message more prominent and centered if it appears
            const countdownElement = document.getElementById("countdown");
            countdownElement.innerHTML = "<div style='width: 100%; text-align: center; font-size: 1.5rem; color: var(--golden-yellow);'><span>🎉</span> ¡Hemos Lanzado! <span>🎉</span></div>";
            countdownElement.style.padding = "20px 0"; // Add some padding
        }
    }, 1000);

    // --- Newsletter Form related JavaScript has been removed ---

    // --- Update Copyright Year ---
    if (document.getElementById('currentYear')) { // Check if element exists
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    }

    // --- Particles.js Configuration ---
    if (typeof particlesJS !== 'undefined') { // Check if particlesJS is loaded
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 60, // Slightly reduced for subtlety, matching image density
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
                    "value": 0.3, // Slightly reduced opacity to match image
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.4,
                        "opacity_min": 0.05, // Lower min opacity
                        "sync": false
                    }
                },
                "size": {
                    "value": 2.5, // Slightly smaller particles
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 130, 
                    "color": "#E0AF4E", 
                    "opacity": 0.15, // Reduced line opacity
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
                        "enable": false, // Disabled click interaction to simplify
                        "mode": "push" 
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 130,
                        "line_opacity": 0.3 // Adjusted grab line opacity
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