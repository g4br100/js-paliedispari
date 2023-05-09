
let userch = prompt("Pari o dispari");
document.getElementById("userch").innerHTML = userch;
console.log("scelto " + userch);
let usern = parseInt(prompt("Scegli un numero da 1 a 5"));
document.getElementById("usern").innerHTML = usern;
console.log("numero utente " + usern);
let computern = computerngen(1,5);
document.getElementById("pcn").innerHTML = computern;
console.log("numero pc " + computern);
function computerngen(min, max){
    let num = Math.floor(Math.random() * (max - min)) + min;
    return (num);
}
function somma (usern, computern){
        let somma = parseInt (usern + computern);
        let risultato = "";
        if (somma % 2 === 0 ) {
            risultato = "pari";
         } else {
            risultato = "dispari";
         }
         return risultato;
}
let verdetto = somma(usern, computern);
document.getElementById("result").innerHTML = verdetto;
console.log(verdetto);
if(userch === verdetto ){
    document.getElementById("win").innerHTML = "Vinto"
    console.log("vinto")
} else {
    document.getElementById("win").innerHTML = "Perso"
    console.log("perso");
}