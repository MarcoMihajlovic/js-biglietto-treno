var nome = prompt("Come ti chiami ?");
var partita = true;

while (partita) {
    
    alert("Allora " + nome + ", ora facciamo una bella partita a Morra Cinese")
    
    var affermazione= true;
    while(affermazione) {
        var mossa = prompt("Scegli tra Sasso, Carta o Forbici");
        if (mossa == "Carta" || mossa == "carta" || mossa == "Forbici" || mossa == "forbici" || mossa == "Sasso" || mossa == "sasso") {
            affermazione = false;
        } else {
            alert("Devi inserire una risposta corretta");
        }
    }

    var mossaAvversario = Math.random()*3;
    mossaAvversario = parseInt(mossaAvversario);

    switch (mossaAvversario) {
        case 0:
            mossaAvversario = "Carta";
            break;

        case 1:
            mossaAvversario = "Forbici";
            break;

        case 2:
            mossaAvversario = "Sasso";
            break;
    }

    alert(nome + " hai scelto " + mossa + " e il tuo avversario ha scelto " + mossaAvversario + " quindi...")

    if ((mossa == "carta" && mossaAvversario == "Carta") || (mossa == "Carta" && mossaAvversario == "Carta") || (mossa == "forbici" && mossaAvversario == "Forbici") || (mossa == "Forbici" && mossaAvversario == "Forbici") || (mossa == "sasso" && mossaAvversario == "Sasso") || (mossa == "Sasso" && mossaAvversario == "Sasso")) {
        alert("Pareggio (ツ)_/¯");
    } else if ((mossa == "carta" && mossaAvversario == "Forbici") || (mossa == "Carta" && mossaAvversario == "Forbici") || (mossa == "sasso" && mossaAvversario == "Carta") || (mossa == "Sasso" && mossaAvversario == "Carta") || (mossa == "forbici" && mossaAvversario == "Sasso") || (mossa == "Forbici" && mossaAvversario == "Sasso")) {
        alert("Hai Perso !");
    } else if ((mossa == "sasso" && mossaAvversario == "Forbici") || (mossa == "Sasso" && mossaAvversario == "Forbici") || (mossa == "forbici" && mossaAvversario == "Carta") || (mossa == "Forbici" && mossaAvversario == "Carta") || (mossa == "carta" && mossaAvversario == "Sasso") || (mossa == "Carta" && mossaAvversario == "Sasso")) {
        alert("Hai Vinto !");
    }

    affermazione = true;
    while (affermazione) {
        var nuovaPartita = prompt("Vuoi fare un'altra partita ? Y/N");
        if (nuovaPartita == "y" || nuovaPartita == "n" || nuovaPartita == "Y" || nuovaPartita == "N" ) {
            affermazione = false;
        } else {
            alert("Devi inserire una risposta corretta");
        }
    }
    if (nuovaPartita == "n" || nuovaPartita == "N") {
        partita = false;
    }
    
}