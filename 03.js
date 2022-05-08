/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function divisores(numero) {
  // La funcion llamada 'divisores' recibe como argumento un numero (entero) 
  // y debe devolver un array con los divisores exactos de 'numero'.
  // Si el numero no tiene divisores ( exeptuando el 1 y el mismo ) deberia devolver el string 'Es primo'
  // Nota: El array no debe contener el 1 y el mismo numero.
  // Por ej:
  // divisores(15) devuelve [3, 5]
  // divisores(11) devuelve 'Es primo'

   // Tu código aca:
  if(!Array.isArray(numero)){
    throw typeError('El argumento debe ser un arreglo.');
  }
  if (!numeros.every(e => typeof e == 'number' && Number.isInteger(e))){
    throw TypeError('Todos los elementos del arreglo deber ser números enteros.');
  }
  let x = numero[0];
  for(let i=1; i < numero.length;++i){
    let y = numero[i];
    x = mdc(x,y);
  }
  return x;
}


// No modifiques nada debajo de esta linea //


module.exports = divisores