/* =========================================
   VISION SAVE HUB TECH

   CONTACT FORM JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async function (e) {

                e.preventDefault();

                const button =
                    contactForm.querySelector(
                        'button[type="submit"]'
                    );

                const originalText =
                    button.innerHTML;

                button.innerHTML =
                    '<i class="fas fa-spinner fa-spin"></i> Sending Message...';

                button.disabled = true;

                try {

                    const formData =
                        new FormData(contactForm);

                    const response =
                        await fetch(
                            contactForm.action,
                            {
                                method: "POST",
                                body: formData,
                                headers: {
                                    "Accept":
                                        "application/json"
                                }
                            }
                        );

                    if (response.ok) {

                        window.location.href =
                            "contact-success.html";

                        return;
                    }

                    alert(
                        "Your message could not be sent. Please try again."
                    );

                    button.disabled = false;
                    button.innerHTML = originalText;

                } catch (error) {

                    console.error(
                        "Contact form error:",
                        error
                    );

                    alert(
                        "Unable to send your message. Please check your internet connection and try again."
                    );

                    button.disabled = false;
                    button.innerHTML = originalText;
                }

            }
        );

    }

});



/* =========================
CONTACT CARD ANIMATION
========================= */


const cards = document.querySelectorAll(".contact-card");



cards.forEach((card,index)=>{


    card.style.opacity="0";

    card.style.transform="translateY(40px)";



    setTimeout(()=>{


        card.style.transition="0.6s ease";

        card.style.opacity="1";

        card.style.transform="translateY(0)";


    }, index * 150);



});







/* =========================
FAQ TOGGLE
========================= */


const faqItems = document.querySelectorAll(
".contact-faq-item"
);



faqItems.forEach(item=>{


    const answer = item.querySelector("p");



    if(answer){


        answer.style.display="none";


        item.style.cursor="pointer";



        item.addEventListener("click",()=>{


            if(answer.style.display==="none"){


                answer.style.display="block";


            }else{


                answer.style.display="none";


            }


        });


    }


});









/* =========================
CONTACT FORM MESSAGE
========================= */


const form = document.querySelector(
".contact-form form"
);



if(form){





}









/* =========================
BUTTON BUBBLE EFFECT
========================= */


const buttons = document.querySelectorAll(
".main-btn"
);



buttons.forEach(button=>{


    button.addEventListener("click",function(){



        let bubble=document.createElement("span");


        bubble.className="click-bubble";


        this.appendChild(bubble);



        setTimeout(()=>{


            bubble.remove();



        },600);



    });



});




