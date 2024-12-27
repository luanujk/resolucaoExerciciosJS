function repetir (primeiroElemento, multiplicador) {
  let arrayResultado = [];
  for (let i = 0; i < multiplicador; i++) {
    arrayResultado.push(primeiroElemento);
  }console.log(arrayResultado)
}

repetir("codigo", 10)

// A ideia era gerar um código onde o primeiro parâmetro de uma função
// recebesse um valor de qualquer tipo e o segundo parâmetro fosse um
// multiplicado de quantas vezes o primeiro parâmetro seria repetido