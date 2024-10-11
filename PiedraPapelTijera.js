function eleccionUsuario(opcionMano){
    opcionMano = prompt("Escribe : Piedra, papel o tijera");
    return opcionMano;
}

function piedraPapelTijera(){
    let opcionRobot = Math.floor(Math.random() * 3 + 1);
    switch (opcionRobot) {
        case 1 :
            opcionRobot = "Piedra";
            break;
        case 2 :
            opcionRobot = "Papel";
            break;
        case 3 :
            opcionRobot = "Tijera";
            break;
    }
}

function ganador (opcionMano, opcionRobot){
    if (opcionMano == opcionRobot){
        console.log("Empate");
    } else {
        if (opcionMano == "Papel" && opcionRobot == "Tijera" ||
            opcionMano == "Piedra" && opcionRobot == "Papel" ||
            opcionMano == "Tijera" && opcionRobot == "Piedra"){
            console.log("Gana la Máquina")
        } else {
            console.log("Ganaste")
        }
    }
}
