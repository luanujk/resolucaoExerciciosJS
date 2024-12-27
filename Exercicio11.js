let primeiroArray = [1, 5, 10, "a", "b", "c"]

let arrayFinal = []

arrayFinal[0] = primeiroArray[0]
arrayFinal.push(primeiroArray.at(-1))
console.log(arrayFinal)

// O desafio era que eu criasse um primeiro array com elementos aleatórios
// Em seguida, criasse um segundo array com o primeiro e o último elemento presente no primeiro array
// A solução usada foi especificar que a primeira posição do primeiro array seria a mesma do segundo
// Para decidir o último elemento, como eu não sabia o tamanho dele, usei o at(-1) para que, independente do tamanho, ele venha a pegar sempre o último elemento do arrayu original e lançar no novo array