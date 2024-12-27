function filtrarNumeros(parametros) {
  let resultado = []
 
  for (let i = 0; i < parametros.length; i++) {
    if (typeof parametros[i] === 'number') {
      resultado.push(parametros[i])
    }
  }
  console.log(resultado)
}

filtrarNumeros([1, 2, 'a', 4, 5, 'b', 6])

// Aqui a ideia é criar um array com tipos primitivos aleatórios e 
// filtrar para que apenas os números fossem exibidos
// A solução foi criar um array secundário vazio para armazenar os números
// A lógica implementada foi usar um typeof para verificar os tipos e, caso seja
// um número, adicionar ao array secundário