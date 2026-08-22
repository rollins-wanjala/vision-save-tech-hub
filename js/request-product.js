/* =========================================

VISION SAVE HUB TECH

REQUEST PRODUCT PAGE JAVASCRIPT

Only affects:
request-product.html

========================================= */


document.addEventListener("DOMContentLoaded", function(){





/* =========================
FAQ ACCORDION
========================= */


const faqItems = document.querySelectorAll(
".request-faq .faq-item"
);



faqItems.forEach(item => {



const answer = item.querySelector("p");



if(answer){



answer.style.display = "none";



item.addEventListener("click", function(){



if(answer.style.display === "none"){



answer.style.display = "block";


item.classList.add("active");



}else{



answer.style.display = "none";


item.classList.remove("active");



}



});



}



});









/* =========================================
   PRODUCT REQUEST FORM
   VISION SAVE HUB TECH
========================================= */

const productRequestForm =
    document.getElementById("productRequestForm");


if (productRequestForm) {

    productRequestForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();


            const button =
                productRequestForm.querySelector(
                    'button[type="submit"]'
                );


            const originalText =
                button.innerHTML;


            button.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Sending Request...';


            button.disabled = true;


            try {

                const formData =
                    new FormData(productRequestForm);


                const response =
                    await fetch(
                        productRequestForm.action,
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
                        "product-success.html";

                    return;

                }


                alert(
                    "Your product request could not be sent. Please try again."
                );


                button.disabled = false;

                button.innerHTML =
                    originalText;


            } catch (error) {

                console.error(
                    "Product request error:",
                    error
                );


                alert(
                    "Unable to send your request. Please check your internet connection and try again."
                );


                button.disabled = false;

                button.innerHTML =
                    originalText;

            }

        }
    );

}



/* =========================
PHONE NUMBER CLEANING
========================= */


const phoneInput =
document.querySelector(
'input[name="phone"]'
);



if(phoneInput){



phoneInput.addEventListener(
"input",
function(){



this.value =
this.value.replace(
/[^0-9+]/g,
""
);



});



}









/* =========================
SCROLL REVEAL EFFECT
========================= */


const revealElements =
document.querySelectorAll(
".category-card, .process-card, .faq-item, .payment-card"
);





const observer =
new IntersectionObserver(
(entries)=>{



entries.forEach(entry=>{



if(entry.isIntersecting){



entry.target.style.opacity="1";


entry.target.style.transform="translateY(0)";



}



});



},
{

threshold:0.15

}

);






revealElements.forEach(element=>{



element.style.opacity="0";


element.style.transform="translateY(40px)";


element.style.transition=
"all .7s ease";



observer.observe(element);



});









/* =========================
BUTTON CLICK ANIMATION
========================= */


const buttons =
document.querySelectorAll(
".main-btn, .whatsapp-btn"
);



buttons.forEach(button=>{



button.addEventListener(
"click",
function(){



this.style.transform =
"scale(.95)";




setTimeout(()=>{



this.style.transform =
"";



},200);



});



});









/* =========================
FORM SUBMISSION MESSAGE
========================= */


if(productForm){



productForm.addEventListener(
"submit",
function(){



console.log(
"Product request sent successfully through Formspree."
);



});



}






});