function nomeDoMes(number) {
    return number === 1 ? 'Janeiro' 
    : number === 2 ? 'Fevereiro'
    : number === 3 ? 'Março'
    : number === 4 ? 'Abril'
    : number === 5 ? 'Maio'
    : number === 6 ? 'Junho'
    : number === 7 ? 'Julho'
    : number === 8 ? 'Agosto'
    : number === 9 ? 'Setembro'
    : number === 10 ? 'Outubro'
    : number === 11 ? 'Novembro'
    : number === 12 ? 'Dezembro'
    : 'Mês inválido';
}

console.log(nomeDoMes())