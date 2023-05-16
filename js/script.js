//ANIMACION DEL ICONO DE LA BARRA DE NAVEGACION RESPONSIVE
document.querySelector(".nav__img").addEventListener("click", animateBars);

var line1__bars=document.querySelector(".line1__nav-img");
let line2__bars=document.querySelector(".line2__nav-img");
let line3__bars=document.querySelector(".line3__nav-img");

function animateBars(){
    line1__bars.classList.toggle("activeline1__nav-img");
    line2__bars.classList.toggle("activeline2__nav-img");
    line3__bars.classList.toggle("activeline3__nav-img");
}

//BLOQUEAR EL MENU CONTEXTUAL
document.addEventListener("contextmenu", function(event){
    event.preventDefault();
}, false);

//EVITAR COPIADO DEL TEXTO
document.addEventListener("copy", function(event){
    event.clipboardData.setData("text/plain", "No se permite copiar texto");
    event.preventDefault();
}, false);

//OCULTAR BARRA AL HACER SCROLL
window.addEventListener("scroll",function(){
    var nav=this.document.querySelector("header");
    nav.classList.toggle("nav__fondo",window.scrollY>0);
    nav.style.transition=".2s";

})
let scroll_inicial=window.scrollY;
let $nav=document.querySelector("header");
let $menu=document.getElementById("menu");
window.addEventListener("scroll",function(){
    let scroll_actual = window.scrollY;
    if(scroll_inicial >= scroll_actual){
        $nav.style.top="0";
    }
    else{
        if($menu.checked==true){
            animateBars();
        }
        $menu.checked=false;
        $nav.style.top="-85px";
        $nav.style.transitionDelay=".1";
    }
    scroll_inicial = scroll_actual;   
})
//CERRAR BARRA AL SELECCIONAR UN ITEM DE LA MISMA
$(function(){
    $("#menu").prop("checked",this.checked);
    $(".nav__item").click(function(){
        $("#menu").prop("checked", false);
        animateBars();
    })
})
