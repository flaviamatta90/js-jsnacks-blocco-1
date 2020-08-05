// 1 l'utente inserisce il primo numero
var primoNumero = parseInt(prompt('Inserisci il primo numero'));

// 2 l'utente inserisce il secondo numero
var secondoNumero = parseInt(prompt('Inserisci il secondo numero'));

// 3 il softwere stampa il numero maggiore
if(primoNumero > secondoNumero){
  console.log('Il primo numero ' + primoNumero + ' è maggiore del secondo')
} else if (secondoNumero > primoNumero){
  console.log('Il secondo numero ' + secondoNumero + ' è maggiore del secondo')
} else{
  console.log('I numeri sono uguali ' + primoNumero + ' ' + secondoNumero);
}
