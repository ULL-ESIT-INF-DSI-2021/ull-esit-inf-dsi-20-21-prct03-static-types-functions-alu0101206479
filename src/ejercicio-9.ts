function dañoPokemon(tipoPokemon1: string,
    tipoPokemon2: string, ataque1: number, defensa2: number) {
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
        if (tipoPokemon2 == "electrico") {
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
        if (tipoPokemon2 == "electrico") {
          efectividad = 1;
        }
        if (tipoPokemon2 == "fuego") {
          efectividad = 0.5;
        }
        break;

      case "electrico":
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

console.log(dañoPokemon("fuego", "fuego", 1, 1));
console.log(dañoPokemon("agua", "agua", 1, 1));
console.log(dañoPokemon("hierba", "hierba", 1, 1));
console.log(dañoPokemon("electrico", "electrico", 1, 1));
console.log(dañoPokemon("fuego", "hierba", 1, 1));
console.log(dañoPokemon("fuego", "agua", 1, 1));
console.log(dañoPokemon("fuego", "electrico", 1, 1));
console.log(dañoPokemon("agua", "hierba", 1, 1));
console.log(dañoPokemon("agua", "electrico", 1, 1));
console.log(dañoPokemon("hierba", "electrico", 1, 1));
