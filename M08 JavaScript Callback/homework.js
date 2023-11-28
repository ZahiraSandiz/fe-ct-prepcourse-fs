/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
  // Esta función recibe un nombre (string).
  // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
  // [Ejemplo]: "mario" ----> "Mario".
  // Tu código:

  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  cb();
}
console.log(mayuscula);

function suma(a, b) {
  return a + b;
}

function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole como parámetros los números.
  // Tu código:
  return cb(num1, num2);
}
console.log(operacionMatematica(2, 1, suma));

function reciboSuma(suma) {}
function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  const resultado = arrayOfNumbers.reduce(function (acumulador, numero) {
    return acumulador + numero;
  }, 0);

  cb(resultado);
}

sumarArray([1, 2, 3, 4, 5], reciboSuma);

function reciboElemento(elemento) {
  console.log(elemento);
}
function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
  array.forEach((elemento, indice, arr) => {
    cb(elemento);
  });
}
forEach([1, 2, 3, 4, 5], reciboElemento);

function reciboArray(resultado) {
  return resultado;
}
function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  return array.map((element) => cb(element));
}

map([1, 2, 3, 4], reciboArray);

function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  const arregloConA = arrayOfStrings.filter((elemento) => {
    return elemento.startsWith("a");
  });

  return arregloConA;
}

const resultadoFiltrado = filter(["antonia", "lola", "ana", "ivan"]);
console.log(resultadoFiltrado);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};
