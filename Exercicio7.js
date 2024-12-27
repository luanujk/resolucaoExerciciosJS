
function estaEntre (numero, minimo, maximo, inclusivo) {
  return numero > minimo && numero < maximo ? true
  : inclusivo === true && ((numero === minimo || numero === maximo))  ? true : false;//+
}

console.log(estaEntre(20, 5, 20, true)); // true