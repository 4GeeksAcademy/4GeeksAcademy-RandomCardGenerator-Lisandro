/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numeros = [
    "As",
    "Rey",
    "Reina",
    "J",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];
  let palos = ["♦", "♥", "♠", "♣"];

  let seleccionDeNumeros = numeros[Math.floor(Math.random() * numeros.length)];
  let seleccionDePalos = palos[Math.floor(Math.random() * palos.length)];

  document.getElementById("PaloArriba").innerHTML = seleccionDePalos;

  document.getElementById("NumeroCentro").innerHTML = seleccionDeNumeros;

  document.getElementById("PaloAbajo").innerHTML = seleccionDePalos;

  if (seleccionDePalos == "♦" || seleccionDePalos == "♥") {
    document.getElementById("PaloArriba").className = "card-text text-danger";
    document.getElementById("PaloAbajo").className = "card-text text-danger";
  } else {
    document.getElementById("PaloArriba").className = "card-text text-dark";
    document.getElementById("PaloAbajo").className = "card-text text-dark";
  }
};
