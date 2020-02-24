/* 1. acquisisco stringa
   2. passo ogni lettera della parola in array
   3. verfico se le lettere sono pari o dispari
    caso pari  4a.se sono pari verifico che prima == ultima, seconda == penultima...
    caso dispari  4b.se sono dispari faccio la verifica per la prima metà della parola - 1 lettera
*/
var parola = prompt("Inserisci una parola (o una frase) e scopri se è palindroma").toLowerCase();
var risposta = isPalindrome(parola);
if (risposta) {
    console.log("Questa parola è palindroma!")
} else {
    console.log("Non è palindroma.")
}


// FUNZIONE PER TROVARE UNA PAROLA PALINDROMA
function isPalindrome(param) {
    var array = param.split("");
    for (var i = 0; i < array.length; i++) { //elimino gli spazi per rendere palindrome anche frasi come "i topi non avevano nipoti"
        if (array[i] == " ") {
            array.splice(i, 1)
        }
    }
    var check = true;
    for (var i = 0; i < (array.length / 2); i++) {
        if (array[i] != array[(array.length - 1) - i]) {
            check = false;
        }
    }
    if (check == false) {
        return false; // non è palindroma
    } else {
        return true; // è palindroma
    }
}

// PARI O DISPARI ============================

/* 1. acquisisco pari o dispri
   2. acquisico numero
   3. genero numero
   4. sommo numeri
   5. somma pari o dispari?
   6. vittoria o sconfitta
*/
//
// var sceltaPariDispari = prompt("Scegli pari o dispari.").toLowerCase();
// var numeroScelto = parseInt(prompt("Scegli un numero."));
// var numeroEstratto = Math.floor(Math.random() * (100 - 1)) + 1;
// var sommaTotale = numeroScelto + numeroEstratto;
//
// if (sommaTotale % 2 == 0){
//     var check = "pari";
// } else {
//     var check = "dispari";
// }
//
// if (check == sceltaPariDispari){
//     console.log("Hai scelto", sceltaPariDispari + ". Il PC ha estratto", numeroEstratto, "e il totale è", sommaTotale + ". YOU WIN!");
// } else{
//     console.log("Hai scelto", sceltaPariDispari + ". Il PC ha estratto", numeroEstratto, "e il totale è", sommaTotale + ". YOU LOSE :(");
// }

//ESERCIZIO RISOLTO CON UNA FUNZIONE====================
var blocco = false;
var sceltaPariDispari = prompt("Scegli pari o dispari.").toLowerCase();
if (sceltaPariDispari != "pari" && sceltaPariDispari != "dispari") {
    alert("Non hai scritto pari o dispari!");
    blocco = true;
} else {
    var numeroScelto = parseInt(prompt("Scegli un numero."));
}

if (blocco == false) {
    var risultatoGioco = giocaPariDispari(sceltaPariDispari, numeroScelto);
    if (risultatoGioco) {
        console.log("Hai scelto", numeroScelto + ". Il PC ha estratto", numeroEstratto, "e il totale è", sommaTotale + ". YOU WIN!");
    } else {
        console.log("Hai scelto", numeroScelto + ". Il PC ha estratto", numeroEstratto, "e il totale è", sommaTotale + ". YOU LOSE :(")
    }
}

function giocaPariDispari(schieramento, numeroScelto) {
    numeroEstratto = Math.floor(Math.random() * (100 - 1)) + 1;
    sommaTotale = numeroScelto + numeroEstratto;
    if (sommaTotale % 2 == 0) {
        var check = "pari";
    } else {
        var check = "dispari";
    }
    if (check == schieramento) {
        return true; //WIN
    } else {
        return false; //LOSE
    }
}









//
