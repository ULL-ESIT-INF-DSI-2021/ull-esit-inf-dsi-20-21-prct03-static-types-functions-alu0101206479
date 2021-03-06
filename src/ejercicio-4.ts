function fromSnakeToCamelCase(snakeCase: string): string {
  let camelCase: string = '';
  for (let i: number = 0; i < snakeCase.length; i++) {
    if (snakeCase[i] == "_") {
      camelCase = camelCase + snakeCase.charAt(i+1).toUpperCase();
      i++;
    } else {
      camelCase = camelCase + snakeCase[i];
    }
  }
  return camelCase;
}

function fromCamelToSnakeCase(camelCase: string): string {
  let snakeCase: string = '';
  for (let i: number = 0; i < camelCase.length; i++) {
    if (camelCase[i] == camelCase.charAt(i).toUpperCase()) {
      snakeCase = snakeCase + "_" + camelCase.charAt(i).toLowerCase();
    } else {
      snakeCase = snakeCase + camelCase[i];
    }
  }
  return snakeCase;
}

let nombre: string = "sample_string";
let funcionEj4: string = fromSnakeToCamelCase(nombre);
console.log(`\nEl nombre en formato Snake Case "${nombre}", en formato Camel Case sería: ${funcionEj4}`);

nombre = "the_stealth_warrior";
funcionEj4 = fromSnakeToCamelCase(nombre);
console.log(`\nEl nombre en formato Snake Case "${nombre}", en formato Camel Case sería: ${funcionEj4}`);

nombre = "sampleString";
funcionEj4 = fromCamelToSnakeCase(nombre);
console.log(`\nEl nombre en formato Camel Case "${nombre}", en formato Snake Case sería: ${funcionEj4}`);

nombre = "theStealthWarrior";
funcionEj4 = fromCamelToSnakeCase(nombre);
console.log(`\nEl nombre en formato Camel Case "${nombre}", en formato Snake Case sería: ${funcionEj4}`);