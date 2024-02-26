function numero_par (numero)
{
    if (numero%2===0) {
        console.log("Número Par")
   }
   else {
    console.log("Número Impar")
   }
}

function numero_mayor (numero1,numero2)
{
    if (numero1>numero2) {
        console.log("El primer número es mayor")
        }
        else if (numero2>numero1){
            console.log("El segundo número es mayor")
        }
   else {
    console.log("Los números son iguales")
}
    }

function multiplo5 (numero)
{
    if (numero%5===0) {
        console.log("Es múltiplo de 5")
   }
   else {
    console.log("No es múltiplo de 5")
   }
}

function imprimir_hasta (numero)
{
    for (let i=0; i<=numero; i++)
    {
      console.log(i)  
    }
}

function imprimir_palabra (palabra, numero)
{
    for (let i=1; i<=numero; i++)
    {
      console.log(palabra)  
    }
}

function imprimir_array (...array) {
    console.log("Imprimiendo elementos del array")
    for (let i=0; i<array.length; i++) {
        console.log(array.at(i))
    }
}


function imprimir_sin5 (...array) {
   console.log("Imprimiendo elementos del array menos el 5to")
    for (let i=0; i<10; i++) {
      if(i!=4){
        console.log(array.at(i))
      }
    }
}

function multiplicar_array (numero, ...array) {
    console.log("Multiplicando el array [1,8,5,4,7,9,3,1,6,2] por el número ingresado")
    for (let i=0; i<array.length; i++) {
        console.log(array.at(i) *numero)
    }
}

let numero1=prompt("Ingrese un numero para saber si es par")
numero_par(numero1)

numero1=prompt("Compare dos números para saber cuál es mayor. Ingrese el primero:")
let numero2=prompt("Ingrese el segundo número.")
numero_mayor(numero1, numero2)

numero1=prompt("Ingrese un numero para saber si es múltiplo de 5")
multiplo5(numero1)

numero1=prompt("Ingrese el número del que desee saber su secuencia")
imprimir_hasta(numero1)

let palabra=prompt("Ingrese una palabra seguida de la cantidad de veces que desea que aparezca.")
let numero=prompt("Ingrese la cantidad de veces que desea que aparezca la palabra")
imprimir_palabra(palabra, numero)

imprimir_array(1,2,3,4,5,6)

imprimir_sin5(1,2,3,4,5,6,7,8,9,10)

numero=prompt("Ingrese el número por el que desee multiplicarlo")
multiplicar_array(numero, 1,8,5,4,7,9,3,1,6,2)
