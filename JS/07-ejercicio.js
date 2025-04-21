const numero1 =  parseInt(prompt("ingrese el primer numero"))
const numero2 =  parseInt(prompt("ingrese el segundo numero"))
const numero3 =  parseInt(prompt("ingrese el tercer numero"))

if (numero1 > numero2) {
    if (numero1 > numero3) {
        document.writeln(numero1, "es el mayor")
    } else {
        document.writeln(numero3, "es el mayor") 
    }
} else {
    if (numero2 > numero3) {
        document.writeln(numero2,"es el mayor")
    } else {
        document.writeln(numero3, "es el mayor")
    }
}


