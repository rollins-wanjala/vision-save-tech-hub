/* =========================================
VISION SAVE HUB TECH
SHOP PAGE JAVASCRIPT

Only affects shop.html
========================================= */


document.addEventListener("DOMContentLoaded", function(){



/* =========================
PRODUCT CARD ANIMATION
========================= */


const products = document.querySelectorAll(".product-card");


products.forEach((product, index)=>{


    product.style.opacity = "0";

    product.style.transform = "translateY(40px)";


    setTimeout(()=>{


        product.style.transition = "0.6s ease";

        product.style.opacity = "1";

        product.style.transform = "translateY(0)";


    }, index * 150);



});





/* =========================
CATEGORY CARD ANIMATION
========================= */


const categories = document.querySelectorAll(".category-card");


categories.forEach((card,index)=>{


    card.style.opacity="0";

    card.style.transform="scale(.9)";



    setTimeout(()=>{


        card.style.transition="0.5s ease";

        card.style.opacity="1";

        card.style.transform="scale(1)";


    }, index * 120);



});






/* =========================
FAQ CLICK EFFECT
========================= */


const faqItems = document.querySelectorAll(".shop-faq-item");



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
BUTTON CLICK BUBBLE EFFECT
GLOBAL SHOP BUTTONS
========================= */


const buttons = document.querySelectorAll(
".main-btn, .product-card a"
);



buttons.forEach(button=>{


button.addEventListener("click", function(e){


    let bubble=document.createElement("span");


    bubble.className="click-bubble";


    this.appendChild(bubble);



    setTimeout(()=>{


        bubble.remove();


    },600);



});



});





});