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
