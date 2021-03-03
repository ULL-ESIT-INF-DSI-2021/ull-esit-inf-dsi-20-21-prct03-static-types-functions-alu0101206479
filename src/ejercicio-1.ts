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

console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
