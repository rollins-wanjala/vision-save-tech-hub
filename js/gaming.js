/* ==========================================
   VISION SAVE HUB TECH
   GAMING PAGE JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       ACTIVE PAGE
    =============================== */

    document.body.classList.add("gaming-page");



    /* ===============================
       TOURNAMENT CARDS ANIMATION
    =============================== */

    const tournamentCards = document.querySelectorAll(".tournament-card");

    const tournamentObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    tournamentCards.forEach(card => {

        tournamentObserver.observe(card);

    });



    /* ===============================
       CONSOLE CARDS
    =============================== */

    const consoleCards = document.querySelectorAll(".console-card");

    consoleCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });



    /* ===============================
       GAME CARDS
    =============================== */

    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px) scale(1.03)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });



    /* ===============================
       GALLERY EFFECT
    =============================== */

    const galleryImages = document.querySelectorAll(".gallery-grid img");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            image.classList.toggle("zoomed");

        });

    });



    /* ===============================
       BUTTON RIPPLE EFFECT
    =============================== */

    document.querySelectorAll(".main-btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(rect.width, rect.height);

            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
            ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

            ripple.classList.add("ripple");

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });



    /* ===============================
       SMOOTH SCROLL FOR PAGE LINKS
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });



    /* ===============================
       PAGE LOADED
    =============================== */

    console.log("Gaming page loaded successfully.");

});