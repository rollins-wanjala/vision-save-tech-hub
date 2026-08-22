/* ==========================================
VISION SAVE HUB TECH

GLOBAL MAIN JAVASCRIPT

CLEAN REWRITE

PART 1:

- DOM READY CORE
- LOADER
- MOBILE MENU
- ACTIVE NAVIGATION
- STICKY HEADER

========================================== */


document.addEventListener("DOMContentLoaded", function(){



/* ==========================================
GLOBAL VARIABLES
========================================== */


const navbar = document.querySelector(".navbar");

const menuBtn = document.querySelector(
".menu-toggle, .mobile-menu"
);

const navLinks = document.querySelector(
".nav-links"
);







/* ==========================================
PAGE LOADER
========================================== */


const loader = document.getElementById(
"loader"
);



if(loader){


    window.addEventListener("load", function(){


        setTimeout(function(){


            loader.classList.add("hide");



            setTimeout(function(){


                loader.style.display="none";


            },500);



        },600);



    });



}









/* ==========================================
MOBILE MENU
========================================== */


if(menuBtn && navLinks){



menuBtn.addEventListener(
"click",
function(e){



    e.stopPropagation();



    navLinks.classList.toggle(
        "active"
    );



    menuBtn.classList.toggle(
        "open"
    );



});







/* CLOSE AFTER CLICKING LINK */


const menuItems =
navLinks.querySelectorAll("a");



menuItems.forEach(function(link){



link.addEventListener(
"click",
function(){



    navLinks.classList.remove(
        "active"
    );



    menuBtn.classList.remove(
        "open"
    );



});



});



}










/* ==========================================
CLOSE MENU OUTSIDE CLICK
========================================== */


document.addEventListener(
"click",
function(e){



if(
navLinks &&
menuBtn &&
!navLinks.contains(e.target) &&
!menuBtn.contains(e.target)

){



    navLinks.classList.remove(
        "active"
    );



    menuBtn.classList.remove(
        "open"
    );



}



});









/* ==========================================
CLOSE MENU WHEN RESIZING
========================================== */


window.addEventListener(
"resize",
function(){



if(window.innerWidth > 900){



    if(navLinks){

        navLinks.classList.remove(
            "active"
        );

    }



    if(menuBtn){

        menuBtn.classList.remove(
            "open"
        );

    }



}



});









/* ==========================================
ACTIVE NAVIGATION LINK
========================================== */


const currentPage =
window.location.pathname
.split("/")
.pop();




const navItems =
document.querySelectorAll(
".nav-links a"
);




navItems.forEach(function(link){



const linkPage =
link.getAttribute("href");



if(linkPage){



const cleanLink =
linkPage.split("/")
.pop();




if(
cleanLink === currentPage ||
(
currentPage === "" &&
cleanLink === "index.html"
)

){



link.classList.add(
"active"
);



}



}



});









/* ==========================================
STICKY NAVBAR SHADOW
========================================== */


if(navbar){



window.addEventListener(
"scroll",
function(){



if(window.scrollY > 50){



navbar.classList.add(
"scrolled"
);



}else{



navbar.classList.remove(
"scrolled"
);



}



});



}







});
/* ==========================================
PART 2

- BACK TO TOP
- SMOOTH SCROLL
- FAQ ACCORDION
- BUTTON RIPPLE
- COUNTERS
- AOS

========================================== */





document.addEventListener("DOMContentLoaded", function(){





/* ==========================================
BACK TO TOP BUTTON
========================================== */


const backTop =
document.getElementById("backTop");



if(backTop){



window.addEventListener(
"scroll",
function(){



if(window.scrollY > 300){



backTop.classList.add(
"show"
);



}else{



backTop.classList.remove(
"show"
);



}



});





backTop.addEventListener(
"click",
function(){



window.scrollTo({

top:0,

behavior:"smooth"

});



});



}










/* ==========================================
SMOOTH SCROLL LINKS
========================================== */


const scrollLinks =
document.querySelectorAll(
'a[href^="#"]'
);




scrollLinks.forEach(function(link){



link.addEventListener(
"click",
function(e){



const target =
document.querySelector(
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









/* ==========================================
FAQ ACCORDION
SUPPORTS:

.faq-question
.faq-answer

AND

h3 + p STRUCTURE

========================================== */


const faqItems =
document.querySelectorAll(
".faq-item"
);



faqItems.forEach(function(item){



const question =
item.querySelector(
".faq-question, h3"
);



const answer =
item.querySelector(
".faq-answer, p"
);



if(question && answer){



answer.style.maxHeight=null;



question.addEventListener(
"click",
function(){



item.classList.toggle(
"active"
);





if(
item.classList.contains("active")
){



answer.style.maxHeight =
answer.scrollHeight + "px";



}else{



answer.style.maxHeight=null;



}






const icon =
question.querySelector("i");



if(icon){



icon.classList.toggle(
"fa-plus"
);



icon.classList.toggle(
"fa-minus"
);



}



});



}



});









/* ==========================================
BUTTON RIPPLE EFFECT
========================================== */


const buttons =
document.querySelectorAll(
".main-btn, .secondary-btn, .register-btn, .donate-btn, .whatsapp-btn, button"
);





buttons.forEach(function(button){



button.addEventListener(
"click",
function(e){



const oldBubble =
button.querySelector(
".click-bubble"
);



if(oldBubble){

oldBubble.remove();

}





const bubble =
document.createElement(
"span"
);





const rect =
button.getBoundingClientRect();



const size =
Math.max(
rect.width,
rect.height
);





bubble.style.width =
size + "px";



bubble.style.height =
size + "px";



bubble.style.left =
(
e.clientX -
rect.left -
size/2
)
+
"px";



bubble.style.top =
(
e.clientY -
rect.top -
size/2
)
+
"px";





bubble.classList.add(
"click-bubble"
);



button.appendChild(
bubble
);





setTimeout(function(){



bubble.remove();



},600);





});



});









/* ==========================================
NUMBER COUNTERS
========================================== */


const counters =
document.querySelectorAll(
".counter"
);





if(counters.length){



const startCounter =
(counter)=>{



const target =
Number(
counter.dataset.target
);



const duration =
2000;



let startTime=null;





function update(time){



if(!startTime){

startTime=time;

}



const progress =
Math.min(
(time-startTime)/duration,
1
);





counter.textContent =
Math.floor(
progress * target
);





if(progress < 1){



requestAnimationFrame(
update
);



}else{



counter.textContent =
target;



}



}



requestAnimationFrame(
update
);



};









const counterObserver =
new IntersectionObserver(
function(entries){



entries.forEach(function(entry){



if(entry.isIntersecting){



startCounter(
entry.target
);



counterObserver.unobserve(
entry.target
);



}



});



},
{

threshold:.5

}

);







counters.forEach(function(counter){



counterObserver.observe(
counter
);



});



}









/* ==========================================
AOS ANIMATION SUPPORT
========================================== */


if(
typeof AOS !== "undefined"
){



AOS.init({

duration:1000,

once:true,

offset:100

});



}





});
/* ==========================================
PART 3

- FORMSPREE HANDLING
- SUCCESS REDIRECT
- FORM PROTECTION
- IMAGE SAFETY
- YEAR UPDATE

========================================== */





document.addEventListener("DOMContentLoaded", function(){





/* ==========================================
FORMSPREE GLOBAL SETTINGS
========================================== */


const formspreeURL =
"https://formspree.io/f/xqpzzpve";









/* ==========================================
HANDLE ALL WEBSITE FORMS
========================================== */


const forms =
document.querySelectorAll(
"form"
);





forms.forEach(function(form){



/*
Skip forms without submission purpose
*/


if(
form.id === "newsletterForm"
){

return;

}






form.addEventListener(
"submit",
async function(e){



/*
Only handle forms connected to Formspree
*/


const action =
form.getAttribute("action");





if(
!action &&
form.classList.contains(
"formspree-form"
)

){



form.action=formspreeURL;



}







const submitBtn =
form.querySelector(
'button[type="submit"]'
);






if(submitBtn){



submitBtn.disabled=true;



const oldText =
submitBtn.innerHTML;



submitBtn.innerHTML =
"Sending...";






setTimeout(function(){



submitBtn.disabled=false;

submitBtn.innerHTML =
oldText;



},5000);



}







/*
If action is Formspree,
allow normal submission

*/




if(
form.action.includes(
"formspree.io"
)
){



e.preventDefault();





const data =
new FormData(form);






try{



const response =
await fetch(
form.action,
{

method:"POST",

body:data,

headers:{

"Accept":"application/json"

}

}
);







if(response.ok){





showFormMessage(
form,
"Thank you! Your message has been sent successfully.",
"success"
);





form.reset();






/*
Redirect pages that require success page

*/


if(
form.id ===
"registrationForm" ||
form.id ===
"tournamentForm"
){



setTimeout(function(){



window.location.href =
"registration-success.html";



},1500);



}






}else{



showFormMessage(
form,
"Something went wrong. Please try again.",
"error"
);



}





}catch(error){





showFormMessage(
form,
"Network error. Please check your connection.",
"error"
);



}





}





});



});









/* ==========================================
FORM MESSAGE DISPLAY
========================================== */


function showFormMessage(
form,
message,
type
){



let messageBox =
form.querySelector(
".form-message"
);





if(!messageBox){



messageBox =
document.createElement(
"div"
);



messageBox.className =
"form-message";



form.appendChild(
messageBox
);



}






messageBox.textContent =
message;



messageBox.className =
"form-message " + type;





messageBox.style.display =
"block";





setTimeout(function(){



messageBox.style.display =
"none";



},5000);



}









/* ==========================================
AUTO YEAR UPDATE
========================================== */


const year =
document.querySelector(
".current-year"
);





if(year){



year.textContent =
new Date()
.getFullYear();



}









/* ==========================================
IMAGE ERROR PROTECTION
========================================== */


const images =
document.querySelectorAll(
"img"
);





images.forEach(function(img){



img.addEventListener(
"error",
function(){



img.classList.add(
"image-error"
);



});



});









/* ==========================================
PREVENT EMPTY LINKS
========================================== */


const emptyLinks =
document.querySelectorAll(
'a[href="#"]'
);





emptyLinks.forEach(function(link){



link.addEventListener(
"click",
function(e){



e.preventDefault();



});



});







});

/* ==========================================
PART 4

FINAL COMPATIBILITY FUNCTIONS

- WHATSAPP SUPPORT
- NEWSLETTER
- LAZY LOADING
- GALLERY SUPPORT
- CARD EFFECTS
- FINAL CLEANUP

========================================== */





document.addEventListener("DOMContentLoaded", function(){





/* ==========================================
WHATSAPP FLOAT BUTTON
========================================== */


const whatsapp =
document.querySelector(
".whatsapp-float"
);




if(whatsapp){



whatsapp.addEventListener(
"mouseenter",
function(){


whatsapp.classList.add(
"active"
);


});





whatsapp.addEventListener(
"mouseleave",
function(){


whatsapp.classList.remove(
"active"
);


});



}









/* ==========================================
NEWSLETTER FORM
========================================== */


const newsletterForm =
document.getElementById(
"newsletterForm"
);





if(newsletterForm){



newsletterForm.addEventListener(
"submit",
function(e){



e.preventDefault();





const email =
newsletterForm.querySelector(
"input[type='email']"
);





if(
email &&
email.value.trim() !== ""
){



let message =
newsletterForm.querySelector(
".newsletter-message"
);





if(!message){



message =
document.createElement(
"p"
);



message.className =
"newsletter-message";



newsletterForm.appendChild(
message
);



}





message.textContent =
"Thank you for subscribing to Vision Save Hub Tech updates.";





message.style.display =
"block";





newsletterForm.reset();





setTimeout(function(){



message.style.display =
"none";



},5000);





}



});



}









/* ==========================================
LAZY IMAGE SUPPORT
========================================== */


const lazyImages =
document.querySelectorAll(
"img[data-src]"
);





lazyImages.forEach(function(img){



img.setAttribute(
"src",
img.getAttribute(
"data-src"
)
);



});









/* ==========================================
GALLERY IMAGE SUPPORT
========================================== */


const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);





galleryImages.forEach(function(image){



image.addEventListener(
"click",
function(){



const overlay =
document.createElement(
"div"
);



overlay.className =
"image-preview";





overlay.innerHTML = `

<img src="${image.src}">

`;





document.body.appendChild(
overlay
);





overlay.addEventListener(
"click",
function(){



overlay.remove();



});





});



});









/* ==========================================
CARD TOUCH SUPPORT
FOR MOBILE DEVICES
========================================== */


const cards =
document.querySelectorAll(
".service-card, .course-card, .game-card, .console-card, .team-card, .impact-card"
);



cards.forEach(function(card){


card.addEventListener(
"touchstart",
function(){


card.classList.add(
"hover-active"
);


});



card.addEventListener(
"touchend",
function(){


setTimeout(function(){


card.classList.remove(
"hover-active"
);


},300);



});


});


/* ==========================================
DISABLE DOUBLE SUBMIT
========================================== */


const submitForms =
document.querySelectorAll(
"form"
);





submitForms.forEach(function(form){



form.addEventListener(
"submit",
function(){



const button =
form.querySelector(
"button[type='submit']"
);





if(button){



button.disabled=true;



setTimeout(function(){



button.disabled=false;



},4000);



}



});



});









/* ==========================================
REMOVE LOADING STATE
========================================== */


window.addEventListener(
"load",
function(){



document.body.classList.add(
"page-loaded"
);



console.log(
"Vision Save Hub Tech Website Loaded Successfully."
);



});









});

// =========================================
// STICKY NAVBAR ON SCROLL
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    const navbarTop = navbar.offsetTop;

    window.addEventListener("scroll", function () {

        if (window.scrollY > navbarTop) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

});