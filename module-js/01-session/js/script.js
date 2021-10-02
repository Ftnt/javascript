var primero = 'escope global';
var scope = 'scope de bloque';

{
    console.log(primero, 'primero');
}

let perros = [
    {
        nombre: 'huesos',
        raza: 'galgo ingles',
    },
    {
        nombre: 'solobino',
        raza: 'galgo ingles',
        apodos: ['apodo2', 3]
    },
];

console.log(perros[1])
console.log(perros)

// declarar 
// let nombre;
// const nombre;
var nombre = 'Selene';

let nombreConLet = ' Manuel';

// const perro = {
//     nombre: 'huesos',
//     raza: 'galgo'
// }
// perro.nombre = 'otro nombre';
// const perro = 'NOMBRE'

// console.log(perro)



//inicializar
function test () {
    
}
test()

const miFunction = function (num1, num2=2) {
    console.log(num1)
    console.log(num2)
    return num1 + num2;
}
console.log(miFunction(1));

console.log('-------------------Operadores');

// aritmeticos

// asignacion
// = -> asignacion
// += -> asginacion con adicion
// -= asignacion con sustraccion
// *=
// /=
// %=
// logicos
// comparacion
// //

/*operadores de comparación:

== comparación
=== extrema comparación
!= diferente
!== extremadamente diferente
> mayor que 
< menor que
>= mayor o igual que
<= menor o igual que
*/

const calificacion = 80;

// if (calificacion > 70 || calificacion < 100 ||  calificacion < 23) {
//     console.log('alumno B')
// } else if (calificacion < 60) {
//     console.log('alumno D')
// } else if (calificacion < 50) {
//     console.log('alumno D')
// } else if (calificacion < 40) {
//     console.log('alumno D')
// }
//  else {
//     console.log('es otra calificaion')
// }

if('a'.charCodeAt() > 10) {
    console.log(true)
}