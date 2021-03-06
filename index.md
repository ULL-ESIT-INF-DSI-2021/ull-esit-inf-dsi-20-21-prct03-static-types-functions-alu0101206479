# Informe
## Práctica 3 - Tipos de datos estáticos y funciones
### Desarrollo de Sistemas Informáticos
### ACOIDAN MESA HERNANDEZ - alu0101206479@ull.edu.es

#### Introducción
Esto es un informe para poder llevar a cabo la **práctica 3 de Desarrollo de Sistemas Informáticos**, hemos aprendido a crear una estructura de directorios adecuada, a usar los tipos de datos estáticos y las funciones de TypeScript. Hemos resuelto 10 ejercicios de los cuales bastantes se resolvían usando [expresiones regulares](https://www.w3schools.com/js/js_regexp.asp) (Por lo que también hemos aprendido a trabajar con ellas en programación). En este informe se mostrarán la resolución de los ejercicios y la explicación de estas soluciónes.

#### Objetivos

Los objetivos de esta práctica han sido crear la estructura de directorios adecuada para trabajar y resolver los 10 ejercicios que nos planteaban en el enunciado, para así familiarizarnos más profundamente con TypeScript.

#### Crear la estructura básica y adecuada del proyecto
Para crear la [estructura básica del proyecto](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html), lo haremos a través de la guía que se abre si pinchamos en el hiperenlace (En la bibliografía también esta el enlace dicha guía). Pero resumiendo, lo primero que se hará es crear un directorio y entrar a él con los siguiente comando:

```bash
  [~()]$mkdir practica3
  [~()]$cd practica3
  [~/practica3()]$
```

Posteriormente crearemos el fichero `package.json` a través del cual gestionaremos las dependencias de nuestro proyecto, lo haremos con el comando:

```bash
[~/practica3()]$npm init --yes
Wrote to /home/usuario/theory-examples/package.json:

{
  "name": "theory-examples",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Seguidamente también crearemos el fichero tsconfig.json

#### Ejercicios

En cuanto a los ejercicios que se mostrarán a continuación, podemos ver sus respectivos enunciados [en el enunciado de la práctica 3], los haremos todos en el directorio `/src`.

##### Ejercicio 1 - Años bisiestos

En este ejercicio se creará la función `isLeapYear(year: number): boolean`, la cual recibirá como parámetro el año y retornará true o false dependiendo si es bisiesto o si no lo es respectivamente. Lo primero que la función hace es la comprobación de que el año sea divisible por 4, si no lo es la función retorna false ya que en ese caso el año no sería bisiesto. Pero si lo fuera, se comprueba que sea divisible también por 100 y en el caso que no lo sea se retorna true ya que el año sería bisiesto. Pero si fuera divisible por 100 también, se comprueba si es divisible por 400, si lo es el año sería bisiesto (la función retornaría true) y si no lo es el año no lo sería (la función retornaría false.

El código del ejercicio sería el siguiente:

```typescript
  function isLeapYear(year: number): boolean {
    if (year%4 == 0) {
      if (year%100 == 0) {
        if (year%400 == 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  let año: number = 1997;
  let funcionEj1: boolean = isLeapYear(año);
  console.log(`\nEl año ${año} es bisiesto: ${funcionEj1}`);

  año = 1996;
  funcionEj1 = isLeapYear(año);
  console.log(`\nEl año ${año} es bisiesto: ${funcionEj1}`);

  año = 1900;
  funcionEj1 = isLeapYear(año);
  console.log(`\nEl año ${año} es bisiesto: ${funcionEj1}`);

  año = 2000;
  funcionEj1 = isLeapYear(año);
  console.log(`\nEl año ${año} es bisiesto: ${funcionEj1}`);
```

Salida del código:

![Salida_ej1](/images/salida_ej1.png)


##### Ejercicio 2 - Notación decimal y factorial

En este disponemos de 3 funciones:

  * Función `decimalToFactorial(numero: number): string`: A esta función se le pasa como parámetro un número entero, lo pasa a notación decimal y lo retorna. Para ello lo primero que se hace es que a través de un bucle `ẁhile` se obtiene el factorial mayor por debajo del número y posteriormente se hace la siguiente formula `463 = 3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0!` a través de un bucle `for`, donde los números que multiplican a los factoriales se obtienen haciendo la división entre el resto (El cual empieza siendo el número entero y en las siguientes iteraciones pasa a ser el número menos lo que se va sacando) y el factorial. Esta división la truncamos con la función `floor` para evitar problemas. Por lo tanto después de sacar ese número se multiplica por el factorial correspondiente y se va haciendo el sumatorio hasta que ya obtenemos la notación factorial.

  * Función `factorialToDecimal(cadena: string): number`: A esta función se le pasa como parámetro una notación factorial, obtiene el número entero que representa y lo retorna. Para ello se crea una variable auxiliar, en este caso `j`, la cual se va incrementando para ir cogiendo los números de la notación de izquierda a derecha. Posteriormente a través de un bucle `for` que va desde el tamaño de la notación hasta 0, multiplicamos el número correspondiente de la notación (marcado por la `j`) por el factorial correspondiente (marcado por la `i`) y haremos el sumatorio moviendonos en todas las posiciones de la notación. Finalmente se obtiene el número entero que representa dicha notación y se retorna

  * Función `function factorial(n: number): number`: A esta función se le pasa como parámetro un número y retorna el factorial de dicho número. Para ello la función utiliza `recursividad` multiplicando el número por el factorial del número-1, siendo el caso base que cuando el número que se pase por parámetro sea igual a 0, retorne 1.

El código del ejercicio sería el siguiente:

```typescript
  function decimalToFactorial(numero: number): string {
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

  let numeroEj2: number | string = 463;
  let funcionEj2: number | string = decimalToFactorial(463);
  console.log(`\nEl número ${numeroEj2} codificado en notación factorial sería: ${funcionEj2}`);

  numeroEj2 = "341010";
  funcionEj2 = factorialToDecimal("341010");
  console.log(`\nLa notacion factorial ${numeroEj2} sería el número entero: ${funcionEj2}`);
```

Salida del código:

![Salida_ej2](/images/salida_ej2.png)
