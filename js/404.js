/* =========================================

VISION SAVE HUB TECH

404 PAGE JAVASCRIPT

Only affects:
404.html

========================================= */


document.addEventListener(
"DOMContentLoaded",
function(){





/* =========================
AUTO UPDATE COPYRIGHT YEAR
========================= */


const yearElement =
document.querySelector(
".footer-bottom p:last-child"
);



if(yearElement){



const currentYear =
new Date().getFullYear();



yearElement.innerHTML =

`© ${currentYear} Vision Save Hub Tech. All Rights Reserved.`;



}









/* =========================
PAGE LOAD ANIMATION
========================= */


const errorSection =
document.querySelector(
".error-section"
);



if(errorSection){



errorSection.style.opacity="0";


errorSection.style.transform=
"translateY(30px)";



setTimeout(()=>{



errorSection.style.transition=
"all .8s ease";



errorSection.style.opacity="1";


errorSection.style.transform=
"translateY(0)";



},200);



}









/* =========================
BUTTON CLICK EFFECT
========================= */


const buttons =
document.querySelectorAll(
".error-buttons a"
);





buttons.forEach(button=>{



button.addEventListener(
"click",
function(){



this.style.transform=
"scale(.95)";



setTimeout(()=>{



this.style.transform="";



},200);



});



});









/* =========================
SERVICE CARD ANIMATION
========================= */


const cards =
document.querySelectorAll(
".service-box"
);






cards.forEach((card,index)=>{



card.style.opacity="0";



card.style.transform=
"translateY(40px)";



setTimeout(()=>{



card.style.transition=
".6s ease";



card.style.opacity="1";



card.style.transform=
"translateY(0)";



},400 + (index * 150));



});









/* =========================
GO BACK BUTTON SUPPORT
========================= */


const homeButton =
document.querySelector(
".main-btn"
);



if(homeButton){



homeButton.addEventListener(
"contextmenu",
function(e){



e.preventDefault();



});



}









});