// Aritmeticos
    // +
    // -
    // *
    // /
    // %
    // ()

const division = 5 / 2;
// const resultado = 10 % 2 ;
// console.log(resultado)
// console.log(division)

const test = 5 + (5 - 10) * 3;
console.log(test)
const nombre = 'Jesus';
const apellido = 'Escutia'
console.log('mi nombre es ' + nombre + apellido)
console.log(`mi nombre es ${ nombre } ${apellido}`)

// Relacionales /comparacion
// >
// <
// >=
// <=
// ==
// === 
// !=
// !==
console.log( 5 > 4);
console.log('7' == 7)
console.log('6' === 6)

let numero = 5;
// numero += 5
numero = numero * 5
numero *= 5
numero /= 5
numero -= 5
// numero /= 5

// Incremento | Decremento

// numero = numero + 1;
console.log(++numero)
console.log(numero)
// console.log(numero++)
console.log(numero)
// console.log(++numero)

// Logico

// && And Se deben de cumplir todas que sean declaradas
// || or -> Con que se cumpla una de las condiciones  
// ! Not

// console.log(7 < 10 && 6 > 10);
// console.log(7 < 10 || 6 > 10);

// const age = 19;
// const isAdult = age >= 18;

//     console.log(isAdult)
// if(!isAdult) {
//     console.log('no es adulto')
// }
// const age = 19;

// if(age > 18 && age >= 21) {
//     console.log('puede tomar')
// } else if (age > 18 && age < 21){
//     console.log(' es mayor pero no puede tomar ')
// } else {
//     console.log('caso default ')
// }

// falsy 
false
undefined
null
NaN
''
0

// truthys
{}
[]
'a'
true

console.log('---------------- estructura if')
if('') {
    console.log('esto es falso')
}
if(1) {
    console.log('esto es verdadero')
}

console.log('---------------- estructura switch');

const currentDay = 1;

// doomingo < - 0
// lunes <- 1


switch (currentDay) {
    case 1: 
    console.log(`el dia es lunes`)
        break;
    case 1:
        console.log('es lunes')
        break;
    case 2:
        console.log('es martes')
        break;
    default:
        console.log('error')
        break;
}

if(currentDay === 1) {
    console.log('lunes')
} else if (currentDay === 2) {
    console.log('martes')
} else {
    console.log('error')
}

const age = 6;

//  Operador ternario
const resultado = age > 18 ? 'es adulto' : 'No es adulto';
console.log(resultado)

// Logicos




















// 1. Pedir al usuario por prompt un numero entre 1 y 100
//    - Verificar si es un par o impar e imprimir en resultado en consola

// 2. Pedir al usuario 2 numeros
//    - Imprimir en consola cual es el menor de los 2
//    - Imprimir en consola cual es el mayor de los 2
   
// 3. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
//    - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola

// 4. Pedir al usuario la calificación de un examen ( 0 a 100) por el prompt:
//    -Imprimir en consola las equivalencias en letra su calificación, es decir:
   
// si es mayor o igual a 90, imprimir "A"

// si es mayor o igual a 80 y menor que 90 , imprimir "B"
   
// si es mayor o igual a 70 y menor que 80 , imprimir "C"
   
// si es mayor o igual a 60 y menor que 70 , imprimir "D"
   
// si es mayor o igual a 50 y menor que 60 , imprimir "E"
   
// si es menor 50 , imprimir "F"
