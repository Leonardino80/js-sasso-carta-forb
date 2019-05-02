// descrizione: Sasso Carta e Forbice tra due giocatori CPU
// dichiaro le variabili
var scelta = [ 'carta', 'forbice', 'sasso'];
var scelta_PL1;
var scelta_PL2;
//  introduco una funzione per la scelta
alert('inizia la partita!');
function carta_forbice_sasso ( scelta_casuale ) {
  var scelta_casuale = scelta[Math.floor(Math.random() * scelta.length)];
return scelta_casuale}
// i giocatori CPU effettuano la loro scelta tramite la funzione
var scelta_PL1 = carta_forbice_sasso ( scelta );
var scelta_PL2 = carta_forbice_sasso ( scelta );
alert ('PL1 sceglie ' + scelta_PL1 + ' mentre PL2 sceglie ' + scelta_PL2 );
