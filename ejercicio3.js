// Obtenemos la hora actual
const horaActual = new Date().getHours();
const minutosActuales = new Date().getMinutes();

// Generamos un número aleatorio entre 0 y 1440 minutos
const minutosAleatorios = Math.floor(Math.random() * 1440);

// Calculamos la hora final
const horaFinal = minutosAleatorios / 60 + horaActual;

// Imprimimos los resultados
console.log("Hora Actual:", horaActual, ":", minutosActuales);
console.log("Valor Aleatorio Generado en Minutos:", minutosAleatorios);
console.log("Hora Final:", horaFinal, ":", minutosAleatorios % 60);
