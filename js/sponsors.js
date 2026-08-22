/* =========================================
VISION SAVE HUB TECH

SPONSORS PAGE JAVASCRIPT

Only affects sponsors.html
========================================= */


document.addEventListener("DOMContentLoaded", function(){






/* =========================
SUPPORT CARD ANIMATION
========================= */


const cards = document.querySelectorAll(
".support-card"
);



cards.forEach((card,index)=>{


    card.style.opacity="0";

    card.style.transform="translateY(40px)";



    setTimeout(()=>{


        card.style.transition="0.7s ease";

        card.style.opacity="1";

        card.style.transform="translateY(0)";



    }, index * 150);



});









/* =========================
IMPACT CARD ANIMATION
========================= */


const impacts = document.querySelectorAll(
".impact-grid div"
);



impacts.forEach((item,index)=>{


    item.style.opacity="0";

    item.style.transform="translateY(30px)";



    setTimeout(()=>{


        item.style.transition="0.6s ease";

        item.style.opacity="1";

        item.style.transform="translateY(0)";


    }, index * 120);



});









/* =========================
FAQ TOGGLE
========================= */


const faqItems = document.querySelectorAll(
".sponsor-faq-item"
);



faqItems.forEach(item=>{


    const answer = item.querySelector("p");



    if(answer){


        answer.style.display="none";



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
========================= */


const buttons = document.querySelectorAll(
".main-btn"
);



buttons.forEach(button=>{


    button.addEventListener("click",function(e){



        let bubble=document.createElement("span");


        bubble.className="click-bubble";



        let rect=this.getBoundingClientRect();



        bubble.style.left=
        (e.clientX - rect.left) + "px";



        bubble.style.top=
        (e.clientY - rect.top) + "px";



        this.appendChild(bubble);



        setTimeout(()=>{


            bubble.remove();


        },600);



    });


});









/* =========================
SMOOTH SCROLL FOR INTERNAL LINKS
========================= */


const links = document.querySelectorAll(
'a[href^="#"]'
);



links.forEach(link=>{


    link.addEventListener("click",function(e){


        let target=document.querySelector(
        this.getAttribute("href")
        );



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }



    });



});









});