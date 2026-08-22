/* =========================================
   VISION SAVE HUB TECH

   TOURNAMENT SUCCESS PAGE JAVASCRIPT

   File:
   js/tournament-success.js

   Only affects:
   pages/tournament-success.html
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       BACK TO TOP BUTTON
    ========================= */

    const backTop = document.getElementById("backTop");


    if (backTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        });


        backTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       SUCCESS CONTENT ANIMATION
    ========================= */

    const animatedElements = document.querySelectorAll(
        ".confirmation-card, .step-card"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        animatedElements.forEach(function (element) {

            element.style.opacity = "0";
            element.style.transform = "translateY(25px)";
            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(element);

        });

    }


});