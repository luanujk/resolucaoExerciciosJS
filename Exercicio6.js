function numberOrBoolean (input) {
   return input === true ? false
   : input === false ? true
   : input > 0 ? (input - ( 2 * input))
   : typeof input !== 'number' && typeof input !== 'boolean' ? "Esperado valor booleano ou numérico, mas o valor inserido é " + typeof input
   : (input - (2 * input))
}

console.log(numberOrBoolean("agua")); // false