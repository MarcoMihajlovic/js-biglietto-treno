var affermazione= true;
    
while(affermazione) {

    var km = prompt("Quanti chilometri devi percorrere ?");
    var eta = prompt("Quanti anni hai ?");
    var num1 = parseInt(km);
    var num2 = parseInt(eta);

    if (isNaN(num1)) {
        alert("Per favore, inserisci i chilometri come valore numerico");
    } else if(isNaN(num2)){
        alert("Per favore, inserisci l'eta' come valore numerico")
    } else {
        affermazione = false;
    }
}

var prezzo = (num1 * 21)/ 100;

if (eta < 18){
    prezzo = prezzo * 0.8;
    alert("Siccome sei minorenne hai uno sconto del 20%. Quindi devi pagare " + prezzo + "€");
} else if (eta > 65) {
    prezzo = prezzo * 0.6;
    alert("Siccome hai piu' di 65 anni hai uno sconto del 40%. Quindi devi pagare " + prezzo + "€");
} else {
    alert("Il prezzo del biglietto e' " + prezzo + "€");
}