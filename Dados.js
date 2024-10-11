/*
Crea una función que simule el lanzamiento de dos dados (números
aleatorios entre 1 y 6). El programa debe contar cuántas veces se obtiene un total de
7 al lanzar los dados 100 veces.
*/
let siete = 0;
function lanzaDados(){
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;
    return dado1+dado2;
}
for(let i = 0; i<100;i++){
    let puntos = lanzaDados();
    if (puntos === 7){
        siete++;
        console.log(siete);
    }
}
