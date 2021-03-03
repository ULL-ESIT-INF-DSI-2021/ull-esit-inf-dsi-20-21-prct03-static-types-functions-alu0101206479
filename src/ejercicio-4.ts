function fromSnakeToCamelCase(snakeCase: string) {
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

function fromCamelToSnakeCase(camelCase: string) {
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

console.log(fromSnakeToCamelCase("hola_mundo_digital"));
console.log(fromCamelToSnakeCase("holaMundoDigital"));
