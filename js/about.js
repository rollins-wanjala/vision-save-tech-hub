/* =========================================
VISION SAVE HUB TECH

ABOUT PAGE JAVASCRIPT ONLY

Handles:
- About page interactions
- Timeline effects
- Team cards

========================================= */


document.addEventListener("DOMContentLoaded", function(){


    aboutPageEffects();


});







/* =========================
ABOUT PAGE EFFECTS
========================= */


function aboutPageEffects(){


    const aboutPage =
    document.querySelector(".about-page");



    if(!aboutPage){

        return;

    }



    timelineAnimation();


    teamCardEffect();


}







/* =========================
TIMELINE ANIMATION
========================= */


function timelineAnimation(){


    const items =
    document.querySelectorAll(".timeline-item");



    if(!items.length){

        return;

    }



    const showTimeline = ()=>{


        items.forEach(item=>{


            const position =
            item.getBoundingClientRect().top;



            if(position < window.innerHeight - 100){


                item.classList.add("show");


            }



        });



    };



    window.addEventListener(
        "scroll",
        showTimeline
    );


    showTimeline();


}







/* =========================
TEAM CARD EFFECT
========================= */


function teamCardEffect(){


    const cards =
    document.querySelectorAll(".team-card");



    cards.forEach(card=>{


        card.addEventListener(
            "mouseenter",
            function(){


                this.style.transform =
                "translateY(-10px)";


            }
        );




        card.addEventListener(
            "mouseleave",
            function(){


                this.style.transform =
                "translateY(0)";


            }
        );



    });



}







/* =========================
IMAGE LOADING EFFECT
========================= */


const images =
document.querySelectorAll(".about-page img");



images.forEach(image=>{


    image.addEventListener(
        "load",
        function(){


            this.classList.add("loaded");


        }
    );


});