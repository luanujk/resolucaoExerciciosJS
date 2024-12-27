function removerPropriedade (primeiroParametro, segundoParametro) {
  const copy = { ...primeiroParametro };
  delete copy[segundoParametro];
  console.log(copy);
}

removerPropriedade({ a: 1, b: 2 }, "a");

