// 1 L'utente inserisce la prima parola
var primaParola = prompt('Inserisci la prima parola');

// 2 L'utente inserisce la seconda parola
var secondaParola = prompt('Inserisci la seconda parola');

// 3 il softwere stampa la parola più corta poi la parola più lunga
if (primaParola.length < secondaParola.length) {
  console.log(primaParola + " " + secondaParola);
} else if (secondaParola.length < primaParola.length){
  console.log(secondaParola + " " + primaParola);
} else {
  console.log('Le parole sono uguali');
}
