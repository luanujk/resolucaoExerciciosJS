function checarAnoBissexto(parametro) {
  if ((parametro % 4 === 0) && (parametro % 100 !== 0) || (parametro % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(checarAnoBissexto(2020)); // true
