/* =========================================

VISION SAVE HUB TECH

CYBER SERVICES JAVASCRIPT

Handles:
- Animations
- FAQ interaction
- Form feedback
- Button effects

========================================= */



document.addEventListener(

"DOMContentLoaded",

function(){







/* =========================
SERVICE CARD ANIMATION
========================= */


const cards = document.querySelectorAll(

".cyber-card, .solution-card, .price-card, .why-grid div"

);



cards.forEach((card,index)=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";



setTimeout(()=>{


card.style.transition="all .6s ease";


card.style.opacity="1";


card.style.transform="translateY(0)";



},200 + (index * 100));



});









/* =========================
FAQ TOGGLE
========================= */


const faqItems = document.querySelectorAll(

".faq-item"

);



faqItems.forEach(item=>{


const question = item.querySelector("h3");


const answer = item.querySelector("p");



if(answer){


answer.style.display="none";

}



question.addEventListener(

"click",

()=>{


if(answer.style.display==="none"){


answer.style.display="block";


answer.style.marginTop="15px";


}

else{


answer.style.display="none";


}



});


});









/* =========================
FORM SUBMISSION FEEDBACK
========================= */


const cyberForm = document.querySelector(

"#cyberForm"

);



if(cyberForm){



cyberForm.addEventListener(

"submit",

function(){



const button = cyberForm.querySelector(

"button"

);



button.innerHTML=

"Sending Request...";



button.style.opacity="0.7";



button.disabled=true;



});



}









/* =========================
WHATSAPP BUTTON ANIMATION
========================= */


const whatsapp = document.querySelector(

".whatsapp-float"

);



if(whatsapp){



setInterval(()=>{


whatsapp.classList.add(

"pulse"

);



setTimeout(()=>{


whatsapp.classList.remove(

"pulse"

);



},1000);



},4000);



}









/* =========================
SMOOTH SCROLL
========================= */


const links = document.querySelectorAll(

'a[href^="#"]'

);



links.forEach(link=>{


link.addEventListener(

"click",

function(e){



const target = document.querySelector(

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