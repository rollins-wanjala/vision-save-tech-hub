/* =====================================================
   SOCIAL MISSION PAGE JAVASCRIPT
   Vision Save Hub Tech
===================================================== */


document.addEventListener("DOMContentLoaded", function(){



/* =========================
AOS INITIALIZATION
========================= */

if(typeof AOS !== "undefined"){

    AOS.init({

        duration:1000,

        once:true

    });

}






/* =========================
MISSION COUNTER ANIMATION
========================= */


const counters = document.querySelectorAll(".mission-number");



counters.forEach(counter => {


    counter.innerText = "0";


    const updateCounter = () => {


        const target = +counter.getAttribute("data-target");


        const current = +counter.innerText;


        const increment = target / 100;



        if(current < target){


            counter.innerText = Math.ceil(current + increment);


            setTimeout(updateCounter,20);


        }else{


            counter.innerText = target;


        }


    };


    updateCounter();



});









/* =========================
NEWSLETTER FORM
(FORMspree compatible)
========================= */


const newsletterForm = document.querySelector(".newsletter-form");



if(newsletterForm){


newsletterForm.addEventListener("submit", function(){


    const button = this.querySelector("button");


    if(button){


        button.innerHTML =
        '<i class="fas fa-check"></i> Sending...';


    }


});


}








/* =========================
SMOOTH SCROLL FOR INTERNAL LINKS
========================= */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


anchor.addEventListener("click", function(e){


const target =
document.querySelector(this.getAttribute("href"));



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});






});