document.addEventListener('DOMContentLoaded', function() {

    // --- Countdown Timer ---
    // Set the date we're counting down to
    // Example: December 31, 2024 23:59:59
    const countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements
        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "<div><span>🎉</span>¡Hemos Lanzado!<span>🎉</span></div>";
        }
    }, 1000);


    // --- Newsletter Form (Simple mock) ---
    const newsletterForm = document.getElementById('newsletterForm');
    const formMessage = document.getElementById('formMessage');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('email');
            // Basic email validation
            if (emailInput.value && emailInput.checkValidity()) {
                formMessage.textContent = '¡Gracias! Te notificaremos cuando lancemos.';
                formMessage.style.color = 'var(--mint-green)'; // Using mint green for success
                emailInput.value = ''; // Clear input
            } else {
                formMessage.textContent = 'Por favor, introduce un correo electrónico válido.';
                formMessage.style.color = 'var(--golden-yellow)'; // Yellow for warning/error
            }
            setTimeout(() => { formMessage.textContent = ''; }, 5000); // Clear message after 5s
        });
    }

    // --- Update Copyright Year ---
    document.getElementById('currentYear').textContent = new Date().getFullYear();


    // --- Particles.js Configuration ---
    // (Pah Venture colors adapted for particles)
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80, // Number of particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#E0AF4E", "#F5F7F7"] // Golden Yellow and Off-White
            },
            "shape": {
                "type": "circle", // Can be "triangle", "polygon", "star", "image"
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.4, // Particle opacity
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3, // Particle size
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120, // Distance for lines
                "color": "#E0AF4E", // Golden Yellow for lines
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5, // Movement speed
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" // "grab", "bubble", "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" // "push", "remove", "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_opacity": 0.5
                },
                "bubble": {
                    "distance": 200,
                    "size": 4,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

});