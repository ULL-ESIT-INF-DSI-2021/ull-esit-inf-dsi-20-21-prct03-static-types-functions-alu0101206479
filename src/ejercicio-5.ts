function onePunch(cadena: string) {
  if (cadena == "") {
    return "Broken!";
  }
  const palabras: string = cadena.split(" ").sort().join(" ");
  let salida: string = "";

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] != "e" && palabras[i] != "a") {
      salida = salida + palabras[i];
    }
  }

  return salida;
}

console.log(onePunch('Beard Jeans Hairbrush Knuckleduster Sand'));
console.log(onePunch('Sock Beard Vest Lady Sage'));
console.log(onePunch('Beard Sack Gun Parachute Face-Kicking-Shoes'));
console.log(onePunch('Snot Snow Soda Tank Beard'));
console.log(onePunch(''));
