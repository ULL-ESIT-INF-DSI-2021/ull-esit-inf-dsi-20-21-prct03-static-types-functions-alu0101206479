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
