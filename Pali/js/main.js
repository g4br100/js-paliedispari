let word = prompt ('Scrivi parola');
let pal = palindrome(word);
function palindrome(word) {
    var letters = word.split("");
    console.log(letters);
    var reversel = letters.reverse();
    console.log(reversel);
    var reversel = letters.join("");
    console.log(reversel);
    if(word == reversel){
        document.getElementById("result").innerHTML = "Palindrome"
        console.log("palindrome");
    } else {
        document.getElementById("result").innerHTML = "Not palindrome"
        console.log("not palindrome")
    }
}