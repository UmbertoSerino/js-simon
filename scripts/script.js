// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la fine di quest'anno!
// Che scadra' quindi a capodanno!
// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

const countdownDate = new Date(2024, 0, 1, 0, 0, 0, 0);
console.log(countdownDate)

// Aggiorna il countdown ogni secondo
let countdownInterval = setInterval(function() {

  // Ottieni la data e l'ora attuali
    let now = new Date();
    console.log(now)

  // Calcola la differenza tra la data di fine e quella attuale
    let distance = countdownDate - now;

  // Calcola giorni, ore, minuti e secondi
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostra il countdown nel formato desiderato
    document.querySelector(".timing").innerHTML = days + " giorni, " + hours + " ore, " + minutes + " minuti, " + seconds + " secondi!";

  // Se il countdown è scaduto, visualizza un messaggio
    if (distance <= 0) {
    clearInterval(countdownInterval);
    document.querySelector(".timing").innerHTML = "BUUUUUUMMMM!!";  
    document.querySelector("div.background").classList.remove("d-none");
    
}
}, 1000);