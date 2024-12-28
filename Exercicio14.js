// Forma #1 -> Simplificada

/* const obj = { nome: "Luan", idade: 31, sexo: "gosto"}

const arrayDeArrays = Object.entries(obj);

console.log(arrayDeArrays)
*/




// Forma #2 -> Com reduce

const obj = {nome: "Luan", idade: 31, cidade: "Itajobi" };

const arrayDeArrays = Object.keys(obj).reduce((acc, chave) => {
  acc.push([chave, obj[chave]]);

  /* Algo importante: na linha acima, "chave" se refere a primeira parte
    do objeto (que é formado por chave + valor).
    Na parte seguinte obj[chave] ele está apontando para o VALOR que está
    relacionado à chave. Dessa forma, eu não coloco obj[valor], pois não 
    existe uma variável valor, mas eu aponto para
    o valor da chave usando obj[chave] */

    // Isso me deu um nó na cabeça quando fui fazer o exercício e é preciso
    // deixar muito claro para não fazer sem entender o que está sendo feito
  return acc;
  
}, []);

console.log(arrayDeArrays);