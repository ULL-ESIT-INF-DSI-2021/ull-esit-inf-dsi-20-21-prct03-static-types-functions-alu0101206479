function onePunch(cadena) {
    if (cadena == "") {
        return "Broken!";
    }
    cadena = cadena.split(" ").sort().join(" ").replace(/[ae]/g, "");
    return cadena;
}
console.log(`\nDespués de separar, ordenar, unir las cadenas de nuevo y eliminar todas las apariciones de las letras a y e, las cadenas quedarian de la siguiente manera: `);
let cadena = "Beard Jeans Hairbrush Knuckleduster Sand";
let funcionEj5 = onePunch(cadena);
console.log(`\n'${cadena}' => '${funcionEj5}'`);
cadena = "Sock Beard Vest Lady Sage";
funcionEj5 = onePunch(cadena);
console.log(`'${cadena}' => '${funcionEj5}'`);
cadena = "Beard Sack Gun Parachute Face-Kicking-Shoes";
funcionEj5 = onePunch(cadena);
console.log(`'${cadena}' => '${funcionEj5}'`);
cadena = "Snot Snow Soda Tank Beard";
funcionEj5 = onePunch(cadena);
console.log(`'${cadena}' => '${funcionEj5}'`);
cadena = "";
funcionEj5 = onePunch(cadena);
console.log(`'${cadena}' => '${funcionEj5}'`);
