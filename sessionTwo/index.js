/* ---------Tarea----------
Casa de cambio

Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), tambien debe  pedirle el nombre de un pais , investigar su moneda y el tipo de cambio para hacer la conversion de  la cantidad capturada. ejemplo

1-¿Que cantidad en MXN deseas convertir ?
R= 1500 MXN
2¿A que pais vas a viajar?
R= USA

salida de la funcion: '$1500MXN (moneda local elegida por el koder) equivale a $750USD(moneda del pais ingresado por el usuario)'

Considerar minimo 4 tipo de monedas */

function calculate(tipoDeCambio, cantidad) {
  let result = tipoDeCambio * cantidad
  return result;
}

function exchangeRate(amountOfMoney, countryName) {
  const paisDefault = "Mexico"
  let res = ''

  const pais = {
    "Peru": { "moneda": "PE", tipoCambio: 0.20 },
    "Mexico": { "moneda": "MXN", tipoCambio: 1 },
    "EEUU": { "moneda": "USD", tipoCambio: 0.049 },
    "Espana": { "moneda": "EUR", tipoCambio: 0.042 },
  }

  let tipoCambio = calculate(pais[countryName].tipoCambio, amountOfMoney)

  if (pais[countryName] && typeof (amountOfMoney) == "number") {
    res = `${amountOfMoney} ${pais[paisDefault]?.moneda} (moneda local elegida por el koder) equivale a ${tipoCambio} ${pais[countryName]?.moneda} (moneda del pais ingresado por el usuario) `
  } else {
    res = 'Por el momento no podemos intercambiar esta moneda'
  }
  return res
}

exchangeRate(500, "Peru")