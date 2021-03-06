function dañoPokemon(tipoPokemon1: string, tipoPokemon2: string, ataque1: number, defensa2: number) {
  let efectividad: number = 0;
  let daño: number = 0;

  if (tipoPokemon1 == tipoPokemon2) {
    efectividad = 0.5;
  } else {
    switch (tipoPokemon1) {
      case "fuego":
        if (tipoPokemon2 == "hierba") {
          efectividad = 2;
        }
        if (tipoPokemon2 == "eléctrico") {
          efectividad = 1;
        }
        if (tipoPokemon2 == "agua") {
          efectividad = 0.5;
        }
        break;

      case "hierba":
        if (tipoPokemon2 == "agua") {
          efectividad = 2;
        }
        if (tipoPokemon2 == "eléctrico") {
          efectividad = 1;
        }
        if (tipoPokemon2 == "fuego") {
          efectividad = 0.5;
        }
        break;

      case "eléctrico":
        if (tipoPokemon2 == "agua") {
          efectividad = 2;
        }
        if ((tipoPokemon2 == "fuego") || (tipoPokemon2 == "hierba")) {
          efectividad = 1;
        }
        break;

      case "agua":
        if (tipoPokemon2 == "fuego") {
          efectividad = 2;
        } else {
          efectividad = 0.5;
        }
        break;
    }
  }

  daño = 50 * (ataque1 / defensa2) * efectividad;
  return daño;
}

let tipoPokemon1 = "fuego";
let tipoPokemon2 = "hierba";
let ataque = 4;
let defensa = 3;
let funcionEj9 = dañoPokemon(tipoPokemon1, tipoPokemon2, ataque, defensa);
console.log(`\nTipo pokemon atacante: ${tipoPokemon1}, tipo pokemon defensor: ${tipoPokemon2}, ataque: ${ataque}, defensa: ${defensa}:`);
console.log(`\tDaño del ataque: ${funcionEj9}`);

tipoPokemon1 = "fuego";
tipoPokemon2 = "agua";
ataque = 3;
defensa = 7;
funcionEj9 = dañoPokemon(tipoPokemon1, tipoPokemon2, ataque, defensa);
console.log(`\nTipo pokemon atacante: ${tipoPokemon1}, tipo pokemon defensor: ${tipoPokemon2}, ataque: ${ataque}, defensa: ${defensa}:`);
console.log(`\tDaño del ataque: ${funcionEj9}`);

tipoPokemon1 = "fuego";
tipoPokemon2 = "eléctrico";
ataque = 8;
defensa = 6;
funcionEj9 = dañoPokemon(tipoPokemon1, tipoPokemon2, ataque, defensa);
console.log(`\nTipo pokemon atacante: ${tipoPokemon1}, tipo pokemon defensor: ${tipoPokemon2}, ataque: ${ataque}, defensa: ${defensa}:`);
console.log(`\tDaño del ataque: ${funcionEj9}`);

tipoPokemon1 = "agua";
tipoPokemon2 = "hierba";
ataque = 2;
defensa = 7;
funcionEj9 = dañoPokemon(tipoPokemon1, tipoPokemon2, ataque, defensa);
console.log(`\nTipo pokemon atacante: ${tipoPokemon1}, tipo pokemon defensor: ${tipoPokemon2}, ataque: ${ataque}, defensa: ${defensa}:`);
console.log(`\tDaño del ataque: ${funcionEj9}`);

tipoPokemon1 = "agua";
tipoPokemon2 = "eléctrico";
ataque = 9;
defensa = 5;
funcionEj9 = dañoPokemon(tipoPokemon1, tipoPokemon2, ataque, defensa);
console.log(`\nTipo pokemon atacante: ${tipoPokemon1}, tipo pokemon defensor: ${tipoPokemon2}, ataque: ${ataque}, defensa: ${defensa}:`);
console.log(`\tDaño del ataque: ${funcionEj9}`);

tipoPokemon1 = "hierba";
tipoPokemon2 = "eléctrico";
ataque = 7;
defensa = 7;
funcionEj9 = dañoPokemon(tipoPokemon1, tipoPokemon2, ataque, defensa);
console.log(`\nTipo pokemon atacante: ${tipoPokemon1}, tipo pokemon defensor: ${tipoPokemon2}, ataque: ${ataque}, defensa: ${defensa}:`);
console.log(`\tDaño del ataque: ${funcionEj9}`);

tipoPokemon1 = "fuego";
tipoPokemon2 = "fuego";
ataque = 2;
defensa = 1;
funcionEj9 = dañoPokemon(tipoPokemon1, tipoPokemon2, ataque, defensa);
console.log(`\nTipo pokemon atacante: ${tipoPokemon1}, tipo pokemon defensor: ${tipoPokemon2}, ataque: ${ataque}, defensa: ${defensa}:`);
console.log(`\tDaño del ataque: ${funcionEj9}`);
