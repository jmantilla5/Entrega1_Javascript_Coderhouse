// Constantes con los numeros mínimo, máximo y cantidad de números
const NUMEROS_MIN = 1;
const NUMEROS_MAX = 39;
const CANTIDAD_NUMEROS = 5;

// Función 1: Captura los números del usuario
function obtenerNumerosUsuario() {
  let numerosUsuario = [];

  for (let i = 0; i < CANTIDAD_NUMEROS; ) {
    let input = prompt(
      `Ingresa un número del ${NUMEROS_MIN} al ${NUMEROS_MAX} (Número ${
        i + 1
      } de ${CANTIDAD_NUMEROS}):`
    );

    if (input === null) {
      alert("Juego cancelado.");
      return null;
    }

    let numero = parseInt(input);

    if (isNaN(numero) || numero < NUMEROS_MIN || numero > NUMEROS_MAX) {
      alert("Número inválido. Intenta nuevamente.");
    } else if (numerosUsuario.includes(numero)) {
      alert("No puedes repetir números.");
    } else {
      numerosUsuario.push(numero);
      i++;
    }
  }

  console.log("Números del usuario:", numerosUsuario);
  return numerosUsuario;
}

// Función 2: Genera 5 números aleatorios sin repetir
function generarNumerosGanadores() {
  let numerosGanadores = [];

  for (let i = 0; i < CANTIDAD_NUMEROS; ) {
    let numeroAleatorio = Math.floor(Math.random() * NUMEROS_MAX) + 1;
    if (!numerosGanadores.includes(numeroAleatorio)) {
      numerosGanadores.push(numeroAleatorio);
      i++;
    }
  }

  console.log("Números ganadores:", numerosGanadores);
  return numerosGanadores;
}

// Función 3: Compara y muestra resultados
function compararResultados(numerosUsuario, numerosGanadores) {
  let aciertos = [];

  for (let i = 0; i < numerosUsuario.length; i++) {
    if (numerosGanadores.includes(numerosUsuario[i])) {
      aciertos.push(numerosUsuario[i]);
    }
  }

  alert(
    `Tus números: ${numerosUsuario.join(", ")}\n` +
      `Números ganadores: ${numerosGanadores.join(", ")}\n\n` +
      `Aciertos: ${aciertos.length}\n${
        aciertos.length > 0 ? "¡Felicidades!" : "Sigue intentando!"
      }`
  );
  console.log(`Aciertos: ${aciertos.length}`, aciertos);
}

// Función principal: controla el flujo del simulador
function ejecutarSimulador() {
  let jugar;

  // Pregunta inicial
  while (true) {
    jugar = prompt("¿Quieres jugar a la lotería? (sí / no)");

    if (jugar === null) {
      alert("Has cancelado el juego. ¡Hasta la próxima!");
      return;
    }

    jugar = jugar.trim().toLowerCase();

    if (jugar === "si" || jugar === "sí") {
      break;
    } else if (jugar === "no") {
      alert("¡Hasta la próxima!");
      return;
    } else {
      alert("Por favor escribe 'sí' o 'no'.");
    }
  }

  // Bucle del juego
  while (true) {
    const numerosUsuario = obtenerNumerosUsuario();
    if (numerosUsuario === null) break;

    const numerosGanadores = generarNumerosGanadores();
    compararResultados(numerosUsuario, numerosGanadores);

    let repetir;

    while (true) {
      repetir = prompt("¿Quieres jugar otra ronda? (sí / no)");

      if (repetir === null) {
        alert("Has cancelado el juego. ¡Hasta la próxima!");
        return;
      }

      repetir = repetir.trim().toLowerCase();

      if (repetir === "si" || repetir === "sí") {
        break;
      } else if (repetir === "no") {
        alert("Gracias por jugar. ¡Hasta la próxima!");
        return;
      } else {
        alert("Por favor escribe 'sí' o 'no'.");
      }
    }
  }
}

// Inicia el simulador
ejecutarSimulador();
