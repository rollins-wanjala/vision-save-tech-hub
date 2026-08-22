

// =========================================
// VISION SAVE HUB TECH
// REGISTRATION SUCCESS PAGE
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // Page loaded successfully
    console.log("Registration Success Page loaded.");

    // Animate success sections
    const sections = document.querySelectorAll(
        ".success-page, .confirmation, .payment-info, .success-buttons"
    );

    sections.forEach(function (section, index) {

        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        setTimeout(function () {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }, 150 + (index * 150));

    });


    // Prevent multiple rapid clicks on buttons
    const buttons = document.querySelectorAll(".success-buttons a");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.pointerEvents = "none";

        });

    });

});