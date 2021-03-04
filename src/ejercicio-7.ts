function siguienteNumero(numero: number) {
  let numText: string = numero.toFixed();
  let aux: string = "";
  for (let i: number = numText.length-1; i > -1; i--) {
    for (let j: number = 0; j < numText.length; j++) {
      if (i-j > 0) {
        if (parseInt(numText[i - j]) <= parseInt(numText[i-j-1])) {
          aux = numText[i-j];
          numText = numText.substr(0, i-j-1) + aux +
          numText[i-j-1] + numText.substr(i-j+1, numText.length);
        } else {
          aux = numText[i-j];
          numText = numText.substr(0, i-j-1) + aux +
          numText[i-j-1] + numText.substr(i-j+1, numText.length);
          return parseInt(numText);
        }
      }
    }
    numText = numero.toFixed();
  }
  return -1;
}

console.log(siguienteNumero(1275));
console.log(siguienteNumero(12));
console.log(siguienteNumero(513));
console.log(siguienteNumero(2017));
console.log(siguienteNumero(9));
console.log(siguienteNumero(111));
console.log(siguienteNumero(531));