/*
Crea una función que convierta una temperatura dada en grados
Celsius a Fahrenheit y viceversa. Usa el parámetro de una función para determinar
la dirección de la conversión.
*/
console.log("Escribe F si quieres ver la temperatura en  Fahrenheit o C para verla en Celsius");
function ConversorTemperatura(temperatura,escala){
    try{
        switch(escala){
            case "F":
                temperatura = (temperatura * 9/5)+32;
                console.log(temperatura);
                break;
            case "C":
                temperatura = (temperatura - 32) *5/9;
                console.log(temperatura);
                break;
            default:
                console.log("Solo puedes introducir C o F");
        }   
    } catch (isNaN){
        console.log("Eso no va");
    }
}
ConversorTemperatura(7, "F");
