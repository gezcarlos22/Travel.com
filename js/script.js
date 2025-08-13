let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}


//----------- Toggle Search Form Updated----------------//
const searchBtn = document.getElementById('search-btn');
const closeSearch = document.getElementById('close-search');
const searchForm = document.querySelector('.search-form');

searchBtn.addEventListener('click', () => {
    searchForm.classList.add('active');
});

closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('active');
});

window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};



document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.home .box');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 segundos
    
    // Función para cambiar de slide
    function nextSlide() {
        // Ocultar slide actual
        slides[currentSlide].classList.remove('active');
        
        // Avanzar al siguiente slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Mostrar nuevo slide
        slides[currentSlide].classList.add('active');
    }
    
    // Iniciar el carrusel automático
    let carouselInterval = setInterval(nextSlide, slideInterval);
    
    
    homeSection.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextSlide, slideInterval);
    });
    
    // Asegurarse de que solo el primer slide esté activo al cargar
    slides.forEach((slide, index) => {
        if(index !== 0) {
            slide.classList.remove('active');
        }
    });
});