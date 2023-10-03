// Generamos un número aleatorio entre 0 y 359 grados
const anguloInicial = Math.floor(Math.random() * 360);

// Generamos un segundo número aleatorio entre 5 y 10
const vueltas = Math.floor(Math.random() * 6) + 5;

// Calculamos el ángulo final
const anguloFinal = anguloInicial + vueltas * 360;

// Imprimimos los resultados
console.log("Posición o ángulo Inicial G.A.:", anguloInicial);
console.log("Valor Aleatorio Generado en Grados:", vueltas * 360);
console.log("Ángulo Final:", anguloFinal % 360);