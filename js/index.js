/* =========================================
VISION SAVE HUB TECH

INDEX PAGE JAVASCRIPT ONLY

Handles:
- Statistics counters
- Homepage animations

========================================= */


document.addEventListener("DOMContentLoaded", function(){


    startCounters();


    homepageReveal();


});





/* =========================
STATISTICS COUNTER
========================= */


function startCounters(){


    const counters = document.querySelectorAll(".stat-box h2");


    counters.forEach(counter => {


        const target = Number(counter.dataset.target);



        if(!target){

            return;

        }



        let count = 0;


        const speed = target / 100;



        const updateCounter = () => {


            count += speed;



            if(count < target){


                counter.innerText = Math.ceil(count);


                requestAnimationFrame(updateCounter);


            }

            else{


                counter.innerText = target + "+";


            }


        };



        updateCounter();



    });



}







/* =========================
SCROLL REVEAL ANIMATION
========================= */


function homepageReveal(){


    const elements = document.querySelectorAll("[data-aos]");



    if(!elements.length){

        return;

    }



    const reveal = () => {


        elements.forEach(element => {


            const position =
            element.getBoundingClientRect().top;



            if(position < window.innerHeight - 100){


                element.classList.add("aos-visible");


            }



        });



    };



    window.addEventListener(
        "scroll",
        reveal
    );


    reveal();


}







/* =========================
HERO BUTTON EFFECT
========================= */


const heroButtons =
document.querySelectorAll(".hero-buttons a");



heroButtons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{


        button.style.transform="translateY(-5px)";


    });



    button.addEventListener("mouseleave",()=>{


        button.style.transform="translateY(0)";


    });



});







/* =========================
SERVICE CARD INTERACTION
========================= */


const serviceCards =
document.querySelectorAll(".service-card");



serviceCards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.classList.add("active");


    });



    card.addEventListener("mouseleave",()=>{


        card.classList.remove("active");


    });



});