function multiplicar(primeiroNumero, segundoNumero) {
  let resultado = 0;
  for (let i = 0; i < segundoNumero; i++) {
    resultado = (resultado + primeiroNumero)    
  } console.log(resultado);
}

multiplicar(1, 5);

// O desafio proposto é multiplicar um número inteiro, positivo e maior do que zero, mas SEM utilizar o sinal do multiplicador

// Usei então um loop de repetição onde, o primeiro número é o número base para ser multiplicado
// A quantidade de loops vai ser o segundo número
// O resultado vai ser armazenado na variável resultado
// A "multiplicação" vai ser efetuada somando o primeiro número a ele mesmo. O resultado vai ser a soma do primeiro número quantas
// vezes for colocado no segundo número, que vai ser o número de loops de repetição
