/* =========================================
VISION SAVE HUB TECH

REGISTRATION PAGE JAVASCRIPT

Only affects:
registration.html

========================================= */


document.addEventListener("DOMContentLoaded", function(){







/* =========================
FAQ ACCORDION
========================= */


const faqItems = document.querySelectorAll(
".registration-faq-item"
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


const registrationForm = document.getElementById(
"registrationForm"
);



if(registrationForm){



registrationForm.addEventListener(
"submit",
function(e){



const firstName =
document.querySelector(
'input[name="first_name"]'
).value.trim();




const lastName =
document.querySelector(
'input[name="last_name"]'
).value.trim();




const phone =
document.querySelector(
'input[name="phone"]'
).value.trim();




const course =
document.querySelector(
'select[name="course"]'
).value;




if(
firstName === "" ||
lastName === "" ||
phone === "" ||
course === ""
){



e.preventDefault();



alert(
"Please fill in your name, phone number and select a course before submitting."
);



return false;



}





});



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
SCROLL REVEAL ANIMATION
========================= */


const animatedSections =
document.querySelectorAll(
".summary-card, .registration-faq-item, .registration-terms li, .payment-card"
);





const observer =
new IntersectionObserver(
(entries)=>{



entries.forEach(entry=>{



if(entry.isIntersecting){



entry.target.classList.add(
"registration-show"
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
BUTTON CLICK EFFECT
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
SUCCESS MESSAGE BEFORE FORM SUBMIT
========================= */


if(registrationForm){



registrationForm.addEventListener(
"submit",
function(){



console.log(
"Registration submitted successfully to Formspree"
);



});



}






});