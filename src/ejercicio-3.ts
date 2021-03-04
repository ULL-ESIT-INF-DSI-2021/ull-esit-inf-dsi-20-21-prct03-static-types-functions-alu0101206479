function isValid(cadena: string) {
  let numero1: string = '';
  let numero2: number = 0;
  let contador: number = 0;
  for (let i: number = 0; i < cadena.length; i = i) {
    numero1 = '';
    numero2 = 0;
    contador = 0;
    while (/\d/.test(cadena[i])) {
      numero1 = numero1 + cadena[i];
      i = i+1;
    }
    numero2 = parseInt(numero1);
    while (!(/\d/.test(cadena[i])) && i < cadena.length) {
      contador++;
      i = i+1;
    }
    if (numero2 == contador) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}


console.log(isValid(""));
console.log(isValid("3hey5hello2hi"));
console.log(isValid("4code10helloworld"));
console.log(isValid("4coe10helloworld"));
console.log(isValid("4code10helloorld"));
