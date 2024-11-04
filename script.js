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
let currentSlide = 0;
let autoplayCount = 0; // Contador para o número de vezes que o autoplay rodou
const maxAutoplay = 3; // Defina o número máximo de vezes que o carrossel deve rodar automaticamente
 
function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalSlides = items.length;
 
    // Atualiza o índice do slide atual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
 
    // Calcula a nova posição do carrossel
    const newTransform = -currentSlide * 100; // Cada item ocupa 100% do carrossel
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform}%)`;
}
 
function autoplay() {
    if (autoplayCount < maxAutoplay) {
        moveSlide(1); // Move para o próximo slide
        autoplayCount++; // Incrementa o contador
    } else {
        clearInterval(autoPlayInterval); // Para o autoplay
    }
}
 
// Adiciona auto-play (opcional)
const autoPlayInterval = setInterval(autoplay, 5000); // Muda de slide a cada 5 segundos



