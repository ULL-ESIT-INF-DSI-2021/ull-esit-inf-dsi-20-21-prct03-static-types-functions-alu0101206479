function isValidISBN(isbn) {
    isbn = isbn.replace(/[-]/g, "");
    if (isbn.length < 10) {
        return false;
    }
    let sumatorio = 0;
    for (let i = 0; i < isbn.length; i++) {
        if (isbn[i] == "X") {
            sumatorio = sumatorio + (10 * (isbn.length - i));
        }
        else {
            sumatorio = sumatorio + (parseInt(isbn[i]) * (isbn.length - i));
        }
    }
    if (sumatorio % 11 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let isbn = "3-598-21508-8";
let funcionEj6 = isValidISBN(isbn);
console.log(`\nEl ISBN "${isbn}" es válido: ${funcionEj6}`);
isbn = "3598215088";
funcionEj6 = isValidISBN(isbn);
console.log(`\nEl ISBN "${isbn}" es válido: ${funcionEj6}`);
isbn = "3-598-21507-X";
funcionEj6 = isValidISBN(isbn);
console.log(`\nEl ISBN "${isbn}" es válido: ${funcionEj6}`);
isbn = "359821507X";
funcionEj6 = isValidISBN(isbn);
console.log(`\nEl ISBN "${isbn}" es válido: ${funcionEj6}`);
isbn = "35-98-285";
funcionEj6 = isValidISBN(isbn);
console.log(`\nEl ISBN "${isbn}" es válido: ${funcionEj6}`);
isbn = "3598215086";
funcionEj6 = isValidISBN(isbn);
console.log(`\nEl ISBN "${isbn}" es válido: ${funcionEj6}`);
