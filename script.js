'use strict'

const big = document.querySelector(".big");
const punto = document.querySelectorAll(".punto");

punto.forEach((positionPunto, i) => {
  //Asignar un CLICK a cada punto
  punto[i].addEventListener("click", () => {
    // 1 - Debería saber la posición de cada punto
    let position = i;
    // 2 - Aplicar un transform al translateX
    let operation = position * -12.5;
    big.style.transform = `translateX(${operation}%)`;

    punto.forEach((positionPunto, i) => {
      // 3 - Quitar la clase ACTIVO de todos los puntos
      punto[i].classList.remove("activo");
    });
    // 4 - Añadir la clase ACTIVO al punto que tiene el CLICK
    punto[i].classList.add("activo");
  });
});
