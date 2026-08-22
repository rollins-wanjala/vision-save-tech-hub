/* =========================================

VISION SAVE HUB TECH

GALLERY PAGE JAVASCRIPT

Only affects:
gallery.html

========================================= */


document.addEventListener("DOMContentLoaded", function(){







/* =========================
CREATE LIGHTBOX
========================= */


const galleryImages = document.querySelectorAll(
".gallery-item img"
);



if(galleryImages.length > 0){



const lightbox = document.createElement("div");


lightbox.className = "gallery-lightbox";



lightbox.innerHTML = `

<span class="lightbox-close">
&times;
</span>


<img src="" alt="Gallery Image">

`;



document.body.appendChild(lightbox);





const lightboxImage =
lightbox.querySelector("img");



const closeButton =
lightbox.querySelector(".lightbox-close");








/* OPEN IMAGE */


galleryImages.forEach(image => {



image.addEventListener(
"click",
function(){



lightboxImage.src =
this.src;



lightbox.classList.add(
"active"
);



document.body.style.overflow =
"hidden";



});



});








/* CLOSE BUTTON */


closeButton.addEventListener(
"click",
function(){



lightbox.classList.remove(
"active"
);



document.body.style.overflow =
"";



});








/* CLICK OUTSIDE IMAGE CLOSE */


lightbox.addEventListener(
"click",
function(e){



if(e.target === lightbox){



lightbox.classList.remove(
"active"
);



document.body.style.overflow =
"";



}



});








/* ESC KEY CLOSE */


document.addEventListener(
"keydown",
function(e){



if(
e.key === "Escape" &&
lightbox.classList.contains("active")
){



lightbox.classList.remove(
"active"
);



document.body.style.overflow =
"";



}



});



}









/* =========================
SCROLL REVEAL ANIMATION
========================= */


const revealItems =
document.querySelectorAll(
".gallery-item, .future-projects, .register"
);






const observer =
new IntersectionObserver(
(entries)=>{



entries.forEach(entry=>{



if(entry.isIntersecting){



entry.target.classList.add(
"show"
);



}



});



},
{

threshold:0.15

}

);






revealItems.forEach(item=>{



item.classList.add(
"gallery-hidden"
);



observer.observe(item);



});









/* =========================
SMOOTH IMAGE HOVER SOUND
PREPARATION
========================= */


const galleryCards =
document.querySelectorAll(
".gallery-item"
);



galleryCards.forEach(card=>{



card.addEventListener(
"mouseenter",
function(){



this.style.zIndex="5";



});





card.addEventListener(
"mouseleave",
function(){



this.style.zIndex="";



});



});









/* =========================
CTA BUTTON EFFECT
========================= */


const buttons =
document.querySelectorAll(
".gallery-page .main-btn"
);



buttons.forEach(button=>{



button.addEventListener(
"click",
function(){



this.style.transform =
"scale(.95)";



setTimeout(()=>{



this.style.transform =
"";



},200);



});



});







});