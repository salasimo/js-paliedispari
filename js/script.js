/* 1. acquisisco stringa
   2. passo ogni lettera della parola in array
   3. verfico se le lettere sono pari o dispari
    caso pari  4a.se sono pari verifico che prima == ultima, seconda == penultima...
    caso dispari  4b.se sono dispari faccio la verifica per la prima metà della parola - 1 lettera
*/
var parola = prompt("Inserisci una parola e scopri se è palindroma");
var risposta = isPalindrome(parola);
if (risposta) {
    console.log("Questa parola è palindroma!")
} else {
    console.log("Non è palindroma.")
}


// FUNZIONE PER TROVARE UNA PAROLA PALINDROMA
function isPalindrome(param) {
    var array = param.split("");
    var ritorno = [];
    for (var i = 0; i < (array.length / 2); i++) {
        if (array[i] != array[(array.length - 1) - i]) {
            ritorno.push(1);
        } else {
            ritorno.push(0);
        }
    }
    if (ritorno.includes(1)) {
        return false; // non è palindroma
    } else {
        return true; // è palindroma
    }
}
