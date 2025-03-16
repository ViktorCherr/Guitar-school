const burgerMenu = document.querySelector('#burger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const navMenuLinks = document.querySelectorAll('')


burgerMenu.addEventListener('click', ()=> {
   console.log('Ok');
   burgerMenu.classList.toggle('burger-menu_opened');
   navMenu.classList.toggle('nav-menu_opened');
   body.classList.toggle('no-scroll');
});


navMenuLinks.forEach(link => {
   link.addEventListener('clcik', ()=>{
      burgerMenu.classList.remove('burger-menu_opened');
      navMenu.classList.remove('nav-menu_opened');
      body.classList.remove('no-scroll');
   })
});


$(document).ready(function(){
$("a[href*='#']").on("click", function(e){
   var anchor = $(this);
   $('html, body').stop().animate({
   scrollTop: $(anchor.attr('href')).offset().top
   }, 777);
   e.preventDefault();
   return false;
});
});

