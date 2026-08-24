// Selecciona el elemento HTML con la clase "slider"
const slider = document.querySelector(".slider");

// Selecciona todos los elementos con la clase "slide"
const slide = document.querySelectorAll(".slide");

// Selecciona la flecha izquierda del control del slider
const flechaIzquierda = document.querySelector(".controls i:nth-child(1)");

// Selecciona la flecha derecha del control del slider
const flechaDerecha = document.querySelector(".controls i:nth-child(2)");

// Selecciona el contenedor de puntos
const puntosWrapper = document.querySelector(".puntos");

// Selecciona todos los puntos dentro del contenedor de puntos
const puntos = document.querySelectorAll(".puntos span");

// Inicializa el índice del slide actual
let slideIndex = 0;

// Itera sobre cada punto y agrega un evento de clic a cada uno
puntos.forEach((punto, indice) => {
  punto.addEventListener("click", () => {
    // Paso 1: Actualiza el índice del slide al índice del punto clicado
    slideIndex = indice;

    // Paso 3: Remueve la clase "active" del punto actualmente activo
    document.querySelector(".puntos .active").classList.remove("active");

    // Paso 2: Actualiza la posición del slider para mostrar el slide correspondiente
    slider.style.transform = `translateX(${slideIndex * -20}%)`;

    // Agrega la clase "active" al punto clicado para resaltarlo
    punto.classList.add("active");
  });
});

// Agrega un evento de clic a la flecha izquierda
flechaIzquierda.addEventListener("click", () => {
  // Paso 1: Actualiza el índice del slide, asegurándose de no ir más allá del primer slide
  slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;

  // Paso 2: Remueve la clase "active" del punto actualmente activo
  document.querySelector(".puntos .active").classList.remove("active");

  // Paso 3: Actualiza la posición del slider para mostrar el slide correspondiente
  slider.style.transform = `translateX(${slideIndex * -20}%)`;

  // Pasa la clase "active" al punto correspondiente al nuevo slide
  puntosWrapper.children[slideIndex].classList.add("active");
});

// Agrega un evento de clic a la flecha derecha
flechaDerecha.addEventListener("click", () => {
  // Paso 1: Actualiza el índice del slide, asegurándose de no ir más allá del primer slide
  slideIndex =
    slideIndex < slide.length - 1 ? slideIndex + 1 : slide.length - 1;

  // Paso 2: Remueve la clase "active" del punto actualmente activo
  document.querySelector(".puntos .active").classList.remove("active");

  // Paso 3: Actualiza la posición del slider para mostrar el slide correspondiente
  slider.style.transform = `translateX(${slideIndex * -20}%)`;

  // Pasa la clase "active" al punto correspondiente al nuevo slide
  puntosWrapper.children[slideIndex].classList.add("active");
});
