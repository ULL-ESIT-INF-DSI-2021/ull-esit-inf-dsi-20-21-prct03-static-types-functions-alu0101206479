function isValidUsername(usuario) {
    if (usuario.length < 4 || usuario.length > 30) {
        return false;
    }
    if (usuario[0] == "_" || usuario[usuario.length - 1] == "_") {
        return false;
    }
    if (!(/[A-Z]/.test(usuario)) ||
        !(/[a-z]/.test(usuario)) ||
        !(/[0-9]/.test(usuario)) ||
        !(/[$_-]/.test(usuario))) {
        return false;
    }
    if ((/[A-Z][A-Z][A-Z]/.test(usuario)) ||
        (/[a-z][a-z][a-z]/.test(usuario)) ||
        (/[0-9][0-9][0-9]/.test(usuario)) ||
        (/[$_-][$_-][$_-]/.test(usuario))) {
        return false;
    }
    return true;
}
let usuario = "u__hello$122__";
let funcionEj10 = isValidUsername(usuario);
console.log(`\nEl nombre de usuario "${usuario}" es válido: ${funcionEj10}`);
usuario = "Aho$12_B";
funcionEj10 = isValidUsername(usuario);
console.log(`\nEl nombre de usuario "${usuario}" es válido: ${funcionEj10}`);
usuario = "_Aho12_B";
funcionEj10 = isValidUsername(usuario);
console.log(`\nEl nombre de usuario "${usuario}" es válido: ${funcionEj10}`);
usuario = "Ac_12";
funcionEj10 = isValidUsername(usuario);
console.log(`\nEl nombre de usuario "${usuario}" es válido: ${funcionEj10}`);
