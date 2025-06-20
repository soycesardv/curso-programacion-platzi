// Crea un numero aleatorio del 1 - 3
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Le da al usuario opcion de elegir una jugada
function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra ✊🥌";
    } else if (jugada == 2) {
        resultado = "Papel ✋🧻";
    } else if (jugada == 3) {
        resultado = "Tijera ✌✂";
    } else {
        resultado = "MAl ELEGIDO";
    }
    return resultado;
}
// Le pregunta al jugador: "1 es piedra, 2 es papel, 3 es tijera"
let jugador = 0;
let pc = 0;
let victorias = 0;
let perdidas = 0;
while (victorias < 3 && perdidas < 3) {
    pc = aleatorio(1, 3);
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

    // Alerta de eleccion de ambos bandos
    alert("Tu eliges: " + eleccion(jugador));
    alert("La PC eligió " + eleccion(pc));

    //COMBATE
    if (pc == jugador) {
        alert("EMPATE");
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert("GANASTE");
        victorias = victorias + 1;
    } else {
        alert("PERDISTE 💀");
        perdidas = perdidas + 1;
    }

    if (victorias == 1) {
        alert("Haz ganado " + victorias + " vez. Haz perdido " + perdidas + " veces.");
    } else if (perdidas == 1) {
        alert("Haz ganado " + victorias + " veces. Haz perdido " + perdidas + " vez.");
    } else if (victorias == 1 && perdidas == 1) {
        alert("Haz ganado " + victorias + " vez. Haz perdido " + perdidas + " vez.");
    } else {
        alert("Haz ganado " + victorias + " veces. Haz perdido " + perdidas + " veces.");
    }
}
