function arrayNumerosPares(parametro) {
  let resultado = [];
  for (let i = 0; i < parametro.length; i++) {
    if ((parametro[i] % 2 == 0) && (i % 2 == 0)) {
      resultado.push(parametro[i]);
    }
  }
  return resultado;
}

console.log(arrayNumerosPares([2, 3, 4, 5, 6, 8, 10]));

/* A ideia é criar uma função que retorne um array onde
apenas números pares e números que estão em índices pares
sejam retornados
*/

 