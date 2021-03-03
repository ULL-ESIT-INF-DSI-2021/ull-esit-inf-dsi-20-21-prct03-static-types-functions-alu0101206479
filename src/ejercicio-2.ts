function decimalToFactorial(numero: number) {
  let factorialMayor: number = 0;
  let notacionFactorial: string = '';
  let numeroNotacion: number = 0;

  while (factorial(factorialMayor) < numero) {
    factorialMayor++;
  }
  factorialMayor--;

  for (let i: number = factorialMayor; i > -1; i--) {
    numeroNotacion = Math.floor(numero/factorial(i));
    notacionFactorial = notacionFactorial + numeroNotacion.toFixed();
    numero = numero - (numeroNotacion*factorial(i));
  }
  return notacionFactorial;
}


function factorialToDecimal(cadena: string): number {
  let notacionNumero: number = 0;
  let j: number = 0;
  for (let i: number = cadena.length-1; i > - 1; i--) {
    notacionNumero = notacionNumero + (parseInt(cadena[j]) * factorial(i));
    j++;
  }
  return notacionNumero;
}

function factorial(n: number): number {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n-1);
}

console.log(decimalToFactorial(463));
console.log(factorialToDecimal("341010"));
