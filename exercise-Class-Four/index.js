//Ejercicio 1
function tablaMultiplicar(numero) {
    if (numero >= 1 && numero <= 10) {
        let contador = 1
        let result = 0
        while (contador <= 10) {
            result = numero * contador
            console.log(`${numero} * ${contador} = ${result}`)
            contador++
        }
    }
}

tablaMultiplicar(5)

// Ejercicio 2
function numeroPar(numero) {
    if (numero >= 10 && numero <= 100) {
        for (let i = 0; i < numero; i++) {
            if (i % 2) {
                console.log(i)
            }
        }
    }
}

numeroPar(29)


// Ejercicio 3
function sumarCadena(numero) {
    numeroArray = String(numero).toString().split("")
    let suma = 0
    for (index in numeroArray) {
        suma += Number(numeroArray[index])
    }
    return suma
}

sumarCadena(1234)


//Ejercicio 4
function patron() {
    let numero = 10
    for (let i = 0; i < numero; i++) {
        let piso = '';
        for (let j = 0; j < i + 1; j++) {
            piso = piso + '*';
        }
        console.log(piso)
    }
}

patron()