/*
Implementa una función que reciba un array de números y calcule el
promedio y la mediana. Usa una función sort para ordenar los números antes de
calcular la mediana.
*/
function calcularPromedio(numeros=[]){
    let total = 0;
    let promedio = 0;
    if (numeros.length === 0) {
        console.log("No se puede calcular el promedio de un array vacío.");
    
    } else {
        numeros.forEach( numero => {
        total += numero;
        contador ++;
    });
    promedio = total / numeros.length;
    console.log(`El promedio es : ${promedio}`);
    }
}

function calcularMediana (numeros=[]){

}
