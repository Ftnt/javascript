// Ejercicio 1
function parImpar(num) {
  let resultado = num > 0 && num <= 100 && typeof (num) == "number" ? ((num % 2 == 0) ? "Es par" : "Es impar") : "Solo acepto numeros entre 1 y 100";
  return resultado;
}
parImpar(3)

// Ejercicio 2
function menorMayor(num1, num2) {
  let res = (typeof (num1) == "number" && typeof (num2) == "number") ?
    (num1 == num2 ? `${num1} es igual que ${num2}` : (num1 > num2 ? `${num1} es mayor` : `${num1} es menor`)
    ) : "Los valores ingresados tienen que ser numeros";
  return res;
}

menorMayor(1, 2)

// Ejercicio 3
function pesoEnLaLuna(nombre, peso) {
  let res = '';
  let gravedadTierra = 9.81;
  let gravedadLunar = 1.622
  if (typeof (nombre) == "string" && typeof (peso) == "number") {
    let pesoEnLuna = (peso / gravedadTierra) * gravedadLunar
    let pesoCondosDecimales = pesoEnLuna.toFixed(2)
    res = `${nombre} tiene un peso de ${pesoCondosDecimales} kg en la luna`
  } else {
    res = "Ingrese valores validos";
  }
  return res;
}

pesoEnLaLuna("Jairo", 84)