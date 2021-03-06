function siguienteNumero(numero) {
    let numText = numero.toFixed();
    let aux = "";
    for (let i = numText.length - 1; i > -1; i--) {
        for (let j = 0; j < numText.length; j++) {
            if (i - j > 0) {
                if (parseInt(numText[i - j]) <= parseInt(numText[i - j - 1])) {
                    aux = numText[i - j];
                    numText = numText.substr(0, i - j - 1) + aux +
                        numText[i - j - 1] + numText.substr(i - j + 1, numText.length);
                }
                else {
                    aux = numText[i - j];
                    numText = numText.substr(0, i - j - 1) + aux +
                        numText[i - j - 1] + numText.substr(i - j + 1, numText.length);
                    return parseInt(numText);
                }
            }
        }
        numText = numero.toFixed();
    }
    return -1;
}
console.log(`\nNúmero -> Siguiente número mayor: `);
let numeroEj7 = 1275;
let funcionEj7 = siguienteNumero(numeroEj7);
console.log(`\n${numeroEj7} -> ${funcionEj7}`);
numeroEj7 = 12;
funcionEj7 = siguienteNumero(numeroEj7);
console.log(`${numeroEj7} -> ${funcionEj7}`);
numeroEj7 = 513;
funcionEj7 = siguienteNumero(numeroEj7);
console.log(`${numeroEj7} -> ${funcionEj7}`);
numeroEj7 = 2017;
funcionEj7 = siguienteNumero(numeroEj7);
console.log(`${numeroEj7} -> ${funcionEj7}`);
numeroEj7 = 9;
funcionEj7 = siguienteNumero(numeroEj7);
console.log(`${numeroEj7} -> ${funcionEj7}`);
numeroEj7 = 111;
funcionEj7 = siguienteNumero(numeroEj7);
console.log(`${numeroEj7} -> ${funcionEj7}`);
numeroEj7 = 531;
funcionEj7 = siguienteNumero(numeroEj7);
console.log(`${numeroEj7} -> ${funcionEj7}`);
