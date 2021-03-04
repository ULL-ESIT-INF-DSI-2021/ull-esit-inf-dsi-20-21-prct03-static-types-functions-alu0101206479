function isValidISBN(isbn: string): boolean {
  isbn = isbn.replace(/[-]/g, "");
  let sumatorio: number = 0;

  for (let i = 0; i<isbn.length; i++) {
    if (isbn[i] == "X") {
      sumatorio = sumatorio + (10 * (isbn.length-i));
    } else {
      sumatorio = sumatorio + (parseInt(isbn[i]) * (isbn.length-i));
    }
  }

  if (sumatorio%11 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidISBN("3-598-21507-X"));
console.log(isValidISBN("359821507X"));
