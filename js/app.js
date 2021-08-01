let btnMenu =document.querySelector(".btn-menu");
let menu = document.querySelector(".list-container");
let containerMenu = document.querySelector(".menu");
let activador = true;

    // MENU DE NAVEGACION

btnMenu.addEventListener("click", () => {
    document.querySelector(".btn-menu i"). classList.toggle("fa-times");

    if (activador) {
        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;
    } else {
        activador = false;
        menu.style.left = "-100%"
        menu.style.transition = "0.5s"

        activador = true;
    }
});

    // INTERCALAR CLASE ACTIVE

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach( (element) => {

    element.addEventListener('click', (event) => {

        enlaces.forEach( (link) => {

            link.classList.remove('active');
        });
        
        event.target.classList.add("active");
    });
} );

    // EFECTOS SCROLL

let prevScrollPos = window.pageYOffset;
let irArriba = document.querySelector(".ir-arriba")

window.onscroll = () => {

    let currenScrollPos = window.pageYOffset;

    // MOSTRAR Y OCULTAR MENU
    if (prevScrollPos > currenScrollPos) {
        
        containerMenu.style.top = "0"; 
        containerMenu.style.transition = "0.4s";
    }else{
        containerMenu.style.top = "-60px"; 
        containerMenu.style.transition = "0.4s";
    }

    prevScrollPos = currenScrollPos;

    // MOSTRAR Y OCULTAR SCROLL ESTILOS

    let arriba = window.pageYOffset;

    if (arriba <= 600) {
        containerMenu.style.borderBottom = "none"

        irArriba.style.right = "-100%";

    }else{
        containerMenu.style.borderBottom = "3px solid  #924123"

        irArriba.style.right = "0";
        irArriba.style.transition = "0.5s"
    }
}