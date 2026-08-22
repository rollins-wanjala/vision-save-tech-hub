/* =========================================
VISION SAVE HUB TECH

TOURNAMENT REGISTRATION JAVASCRIPT

Only affects:
tournament-registration.html

========================================= */


document.addEventListener("DOMContentLoaded", function(){





/* =========================
FAQ TOGGLE
========================= */


const faqItems = document.querySelectorAll(
".tournament-faq-item"
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









/* =========================
FORM VALIDATION
========================= */


const tournamentForm = document.querySelector(
".tournament-registration-form form"
);



if(tournamentForm){



tournamentForm.addEventListener(
"submit",
function(e){



    const name =
    document.getElementById("name").value.trim();



    const phone =
    document.getElementById("phone").value.trim();



    const tournament =
    document.getElementById("tournament").value;



    if(
    name === "" ||
    phone === "" ||
    tournament === ""
    ){



        e.preventDefault();



        alert(
        "Please fill in your name, phone number and tournament selection."
        );



        return false;


    }




});



}









/* =========================
SCROLL ANIMATION
========================= */


const animatedSections =
document.querySelectorAll(
".event-card, .prize-card, .tournament-faq-item, .rules li"
);





const observer =
new IntersectionObserver(
(entries)=>{



entries.forEach(entry=>{



if(entry.isIntersecting){



entry.target.classList.add(
"tournament-show"
);



}



});



},
{

threshold:0.15

}

);






animatedSections.forEach(section=>{


observer.observe(section);



});









/* =========================
BUTTON RIPPLE EFFECT
========================= */


const buttons =
document.querySelectorAll(
".main-btn"
);



buttons.forEach(button=>{


button.addEventListener(
"click",
function(e){



let ripple =
document.createElement("span");



ripple.className =
"button-ripple";



let rect =
this.getBoundingClientRect();



ripple.style.left =
(e.clientX - rect.left) + "px";



ripple.style.top =
(e.clientY - rect.top) + "px";



this.appendChild(ripple);





setTimeout(()=>{


ripple.remove();



},600);



});



});









/* =========================
PHONE NUMBER FORMAT CHECK
========================= */


const phoneInput =
document.getElementById("phone");



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









});