// Ejercicio1
function formatName(name, lastname) {
  let nameLowerCase = name.toLowerCase()
  let lastnameUpperCase = lastname.toUpperCase()
  let results = `${nameLowerCase}  ${lastnameUpperCase}`
  return results;
}
formatName("Jairo", "Rocano")

// Ejercicio2
function lengthName(name) {
  //split() sirve para separar una cadena de texto en múltiples arreglos
  //join() convierte un arreglo en un string usando igualmente un separador  
  let nameRemoveSpace = name.trim().split(" ").join("")
  let lengthName = nameRemoveSpace.length
  let result = `El nombre ingresado (${name}) tiene ${lengthName} caracteres`
  return result
}
lengthName("Jairo Rocano")

//Ejercicio 3
function vowelsOfName(name) {
  /* match() se usa para obtener todas las ocurrencias de una expresión regular.
  Modificadores: 
     g-> encuentra todo
     i-> no distingue entre minuscula y mayuscula*/
  let nameSelectedVowel = name.match(/[aeiou]/gi);
  let nameCountVowel = nameSelectedVowel.length
  let result = `El nombre ingresado (${name}) tiene ${nameCountVowel} vocales`
  return result
}
vowelsOfName("Jairo Rocano")


//Ejercicio 4
function replaceText(text, wordReplace) {
  let wordOrigin = "estudiante";
  let countWord = text.match(/estudiante/gi).length
  let replaceWord = text.replaceAll(wordOrigin, wordReplace)
  return `""${replaceWord}" y la palabra ${wordOrigin} se repite ${countWord} veces`
}

let sentences = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
replaceText(sentences, "Koder")

//Ejercicio 5
function wordMoreLarge(sentence) {
  let lengthSetence = sentence.split(" ")
  return lengthSetence[0].length > lengthSetence[1].length ? lengthSetence[0] : lengthSetence[1]
}

wordMoreLarge("Programación Javascript")



clickBtnRedirecionamiento("#btn-incidencia-caso")

/* Interaccion del btn: Registro de incidencia de caso creado (2021-10-01) */
function clickBtnRedirecionamiento(idBtn) {
  $(idBtn).on('click', function () {
    let data = window.location.href;

    let params = new URLSearchParams(location.search);
    let lead_id = params.get('lead_id');
    let vendor_id = params.get('vendor_id');

    window.location = `/reincidencia/index/"+vendor_id`;
  })
}// Fin clickBtnRedirecionamiento