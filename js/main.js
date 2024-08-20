const burgerMenu = document.querySelector('#burger');
const navMenu = document.querySelector('.nav-menu');


burgerMenu.addEventListener('click', ()=> {
   console.log('Ok');
   burgerMenu.classList.toggle('burger-menu_opened');
   navMenu.classList.toggle('nav-menu_opened')
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

