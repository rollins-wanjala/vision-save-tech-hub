/* =========================================
VISION SAVE HUB TECH

COMPUTER PACKAGES PAGE JS

PAGE ONLY SCRIPT

========================================= */



document.addEventListener("DOMContentLoaded", function(){





/* =========================
AOS ANIMATION
========================= */


if(typeof AOS !== "undefined"){

    AOS.init({

        duration:1000,

        once:true,

        offset:100

    });

}







/* =========================
FAQ ACCORDION
========================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question){

    question.addEventListener("click", function(){

        const answer = this.nextElementSibling;

        /* close other answers */

        document.querySelectorAll(".faq-answer").forEach(function(item){

            if(item !== answer){

                item.style.maxHeight = null;

            }

        });


        document.querySelectorAll(".faq-question").forEach(function(btn){

            if(btn !== question){

                btn.classList.remove("active");

            }

        });


        /* open selected answer */

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

            this.classList.remove("active");

        }else{

            answer.style.maxHeight =
                answer.scrollHeight + "px";

            this.classList.add("active");

        }

    });

});







/* =========================
BACK TO TOP BUTTON
========================= */


const backTop = document.getElementById("backTop");



if(backTop){



window.addEventListener("scroll",function(){


    if(window.scrollY > 300){


        backTop.style.display="flex";


    }else{


        backTop.style.display="none";


    }



});





backTop.addEventListener("click",function(){


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



}








/* =========================
LOADER
========================= */


const loader = document.getElementById("loader");


if(loader){


window.addEventListener("load",function(){


    loader.style.display="none";


});


}

/* =========================
NUMBER COUNTER EFFECT
========================= */


const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {


let target = Number(counter.dataset.target);

let count = 0;


let speed = target / 100;



function updateCounter(){


if(count < target){


count += speed;


counter.innerText = Math.ceil(count);


setTimeout(updateCounter,20);



}else{


counter.innerText = target;


}


}


updateCounter();



});
})
