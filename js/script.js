$(function(){
'use strict'

// scroll smooth
$('.menu_item a').on('click', function(){
$('html,body').animate({
scrollTop:$($.attr(this, 'href')).offset().top
},1000);
return false
});



});


function openMenu() {
    document.getElementById('navbar').style.height = "100%"
}

function closeMenu() {
    document.getElementById('navbar').style.height = "0%"
}