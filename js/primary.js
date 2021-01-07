//Palindroma
//Chiedere all'utente di inserire una parola
var parolaScelta = prompt('Inserisci una parola');
console.log(parolaScelta);

var parolaContrario = wordReverse(parolaScelta);
console.log(parolaContrario);

//Condizione
if (parolaContrario === parolaScelta) {
    console.log('La parola è Palindroma');
}else{
  console.log('La parola non è Palindroma')
}

//Inversione dei caratteri della stringa
function wordReverse(word) {

    var reverse = '';

    for (var i = word.length - 1; i >= 0; i-- ) {

        reverse += word[i];

    }

    return reverse;
}
//Pari o Dispari
//Scegli pari o dispari
var sceltaUtentePd = prompt('Scegli pari o dispari?');

//Scegli un numero
var sceltaUtenteN = parseInt( prompt('Inserisci un numero da 1 a 5'));

if ((sceltaUtenteN < 1) || (sceltaUtenteN > 5) ) {
     alert('Numero non valido riprova');
 }

 var sceltaPc = randomNumber(1, 5);
 console.log('Numero computer:', sceltaPc);

 //Somma
 var somma = sceltaUtenteN + sceltaPc;
 console.log('Somma:', somma);

//Risultato e vincitore
var risultato = result(somma);
console.log('Risultato:', risultato);

if (sceltaUtentePd === risultato) {
    console.log('Ha vinto il giocatore');
} else {
    console.log('Ha vinto il computer');
}


//Function generazione di un numero casuale da 1 a 5
function randomNumber(min, max) {

    var rand = Math.floor( Math.random() * (max - min +1) ) + min;

    return rand;
}

//Function numero pari o dispari
function result(num) {
    if (num % 2 === 0) {
        console.log('Il numero è pari');
        return 'pari';
    }else{

    return 'dispari';
  }
}
