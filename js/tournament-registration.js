/* =========================================
   VISION SAVE HUB TECH

   TOURNAMENT REGISTRATION JAVASCRIPT

   File:
   js/tournament-registration.js
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       FAQ TOGGLE
    ========================= */

    const faqItems = document.querySelectorAll(
        ".tournament-faq-item"
    );


    faqItems.forEach(function (item) {

        const answer = item.querySelector("p");


        if (answer) {

            answer.style.display = "none";


            item.addEventListener("click", function () {

                if (answer.style.display === "none") {

                    answer.style.display = "block";

                    item.classList.add("active");

                } else {

                    answer.style.display = "none";

                    item.classList.remove("active");

                }

            });

        }

    });


    /* =========================
       TOURNAMENT FORM
       FORMSPREE + REDIRECT
    ========================= */

    const tournamentForm =
        document.getElementById("tournamentForm");


    if (tournamentForm) {


        tournamentForm.addEventListener(
            "submit",
            async function (e) {

                e.preventDefault();


                /* =========================
                   GET FORM VALUES
                ========================= */

                const name =
                    document.getElementById("name").value.trim();


                const phone =
                    document.getElementById("phone").value.trim();


                const tournament =
                    document.getElementById("tournament").value;


                const email =
                    document.getElementById("email").value.trim();


                const age =
                    document.getElementById("age").value;


                const category =
                    document.getElementById("category").value;


                const message =
                    document.getElementById("message").value.trim();


                /* =========================
                   VALIDATION
                ========================= */

                if (
                    name === "" ||
                    phone === "" ||
                    email === "" ||
                    tournament === "" ||
                    category === ""
                ) {

                    alert(
                        "Please fill in all required registration fields."
                    );

                    return;

                }


                /* =========================
                   SUBMIT BUTTON
                ========================= */

                const submitButton =
                    tournamentForm.querySelector(
                        'button[type="submit"]'
                    );


                const originalButtonText =
                    submitButton
                        ? submitButton.innerHTML
                        : "";


                if (submitButton) {

                    submitButton.disabled = true;

                    submitButton.innerHTML =
                        '<i class="fas fa-spinner fa-spin"></i> Registering...';

                }


                /* =========================
                   PREPARE FORMSPREE DATA
                ========================= */

                const formData =
                    new FormData(tournamentForm);


                /* Remove old redirect instruction */

                formData.delete("_next");


                try {


                    /* =========================
                       SEND TO FORMSPREE
                    ========================= */

                    const response =
                        await fetch(
                            tournamentForm.action,
                            {
                                method: "POST",

                                body: formData,

                                headers: {
                                    "Accept":
                                        "application/json"
                                }
                            }
                        );


                    /* =========================
                       SUCCESS
                    ========================= */

                    if (response.ok) {


                        /*
                           Redirect directly to the
                           tournament success page.

                           Both files are inside:
                           pages/
                        */

                        window.location.href =
                            "tournament-success.html";


                        return;

                    }


                    /* =========================
                       FORMSPREE ERROR
                    ========================= */

                    let errorMessage =
                        "Registration could not be completed. Please try again.";


                    try {

                        const data =
                            await response.json();


                        if (
                            data &&
                            data.errors &&
                            data.errors.length
                        ) {

                            errorMessage =
                                data.errors
                                    .map(function (error) {
                                        return error.message;
                                    })
                                    .join("\n");

                        }

                    } catch (jsonError) {

                        /* Keep default error message */

                    }


                    alert(errorMessage);


                } catch (error) {


                    console.error(
                        "Tournament registration error:",
                        error
                    );


                    alert(
                        "Unable to submit your registration. Please check your internet connection and try again."
                    );


                } finally {


                    if (submitButton) {

                        submitButton.disabled = false;

                        submitButton.innerHTML =
                            originalButtonText;

                    }

                }

            }
        );

    }


    /* =========================
       SCROLL ANIMATION
    ========================= */

    const animatedSections =
        document.querySelectorAll(
            ".event-card, .prize-card, .tournament-faq-item, .rules li"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "tournament-show"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        animatedSections.forEach(
            function (section) {

                observer.observe(section);

            }
        );

    }


    /* =========================
       BUTTON RIPPLE EFFECT
    ========================= */

    const buttons =
        document.querySelectorAll(".main-btn");


    buttons.forEach(function (button) {


        button.addEventListener(
            "click",
            function (e) {


                const ripple =
                    document.createElement("span");


                ripple.className =
                    "button-ripple";


                const rect =
                    this.getBoundingClientRect();


                ripple.style.left =
                    (e.clientX - rect.left) + "px";


                ripple.style.top =
                    (e.clientY - rect.top) + "px";


                this.appendChild(ripple);


                setTimeout(
                    function () {

                        ripple.remove();

                    },
                    600
                );

            }
        );

    });


    /* =========================
       PHONE NUMBER FORMAT
    ========================= */

    const phoneInput =
        document.getElementById("phone");


    if (phoneInput) {


        phoneInput.addEventListener(
            "input",
            function () {


                this.value =
                    this.value.replace(
                        /[^0-9+]/g,
                        ""
                    );

            }
        );

    }

});