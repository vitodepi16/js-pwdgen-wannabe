const nomeUtente = prompt('Come ti chiami?');
const cognomeUtente = prompt('Il tuo cognome?');
const coloreUtente = prompt('Il tuo colore preferito?');
console.log(nomeUtente + cognomeUtente + coloreUtente);
document.getElementById('nomecognomecolorepreferito21').innerHTML=`
<h2>${nomeUtente} ${cognomeUtente} ${coloreUtente}</h2>`;
 