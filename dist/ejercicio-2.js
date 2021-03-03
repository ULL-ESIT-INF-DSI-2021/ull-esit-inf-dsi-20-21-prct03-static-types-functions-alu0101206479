function decimalToFactorial(numero) {
    let factorialMayor = 0;
    let notacionFactorial = '';
    let numeroNotacion = 0;
    while (factorial(factorialMayor) < numero) {
        factorialMayor++;
    }
    factorialMayor--;
    for (let i = factorialMayor; i > -1; i--) {
        numeroNotacion = Math.floor(numero / factorial(i));
        notacionFactorial = notacionFactorial + numeroNotacion.toFixed();
        numero = numero - (numeroNotacion * factorial(i));
    }
    return notacionFactorial;
}
function factorialToDecimal(cadena) {
    let notacionNumero = 0;
    let j = 0;
    for (let i = cadena.length - 1; i > -1; i--) {
        notacionNumero = notacionNumero + (parseInt(cadena[j]) * factorial(i));
        j++;
    }
    return notacionNumero;
}
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(decimalToFactorial(463));
console.log(factorialToDecimal("341010"));
