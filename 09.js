/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function repetirCaracteres(texto) {
  // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
  // que reciba como parametro un string
  // y devuelve un string en donde cada letra se repita una vez.
  // Por ej:
  // 'hola'.repeatCharacters() devuelve "hhoollaa"

  // Tu código aca:
  const letters = texto.split('')
  const repeated = letters.map(letter => letter.repeat(2))
  return repeated.join('')

}
console.log(repetirCaracteres(texto));

  // No modifiques nada debajo de esta linea //

module.exports = repetirCaracteres