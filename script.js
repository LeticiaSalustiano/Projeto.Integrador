var menubutton = document.getElementById("menubutton");
var menu = document.getElementById("menu");

menubutton.addEventListener("click", function() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
});


//carrossel
const pessoas = document.querySelector('.pessoas');
const btnEsquerda = document.getElementById('btn-esquerda');
const btnDireita = document.getElementById('btn-direita');

let index = 0;

function updateCarousel() {
    const totalImages = pessoas.children.length;
    const offset = index * -105; 
    pessoas.style.transform = `translateX(${offset}px)`;
}

btnEsquerda.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : pessoas.children.length - 1;
    updateCarousel();
});

btnDireita.addEventListener('click', () => {
    index = (index < pessoas.children.length - 1) ? index + 1 : 0;
    updateCarousel();
});
