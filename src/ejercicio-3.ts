function isValid(cadena: string): boolean {
  let digitos: string = '';
  let numero: number = 0;
  let contador: number = 0;

  for (let i: number = 0; i < cadena.length; i = i) {
    digitos = '';
    numero = 0;
    contador = 0;
    while (/\d/.test(cadena[i])) {
      digitos = digitos + cadena[i];
      i = i+1;
    }
    numero = parseInt(digitos);
    while (!(/\d/.test(cadena[i])) && i < cadena.length) {
      contador++;
      i = i+1;
    }

    if (numero == contador) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

let mensaje: string = "";
let funcionEj3: boolean = isValid(mensaje);
console.log(`\nEl mensaje "${mensaje}" es valido: ${funcionEj3}`);

mensaje = "3hey5hello2hi";
funcionEj3 = isValid(mensaje);
console.log(`\nEl mensaje "${mensaje}" es valido: ${funcionEj3}`);

mensaje = "4code10helloworld";
funcionEj3 = isValid(mensaje);
console.log(`\nEl mensaje "${mensaje}" es valido: ${funcionEj3}`);

mensaje = "4coe10helloworld";
funcionEj3 = isValid(mensaje);
console.log(`\nEl mensaje "${mensaje}" es valido: ${funcionEj3}`);

mensaje = "4code10helloorld";
funcionEj3 = isValid(mensaje);
console.log(`\nEl mensaje "${mensaje}" es valido: ${funcionEj3}`);