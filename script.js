const palindromeInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultParagraph = document.getElementById("result");


const checkPalindrome = (text) => {
  const cleaned = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9\u00C0-\u024F\u1E00-\u1EFF]/g, ''); /* le regex dit toutes les lettres, chiffres et accents ne sont pas concernés par le clean grâce au ^ */
  const reverse = cleaned.split("").reverse().join("");
  if (cleaned.length <= 1) {
    return false;
  }
  return cleaned === reverse; /* comme c'est un return de deux valeurs comparés par un operateur ça retourne un boulean */
}


palindromeInput.addEventListener("keypress", (event) => {
  if(event.key === "Enter") {
    checkButton.click();
  }
})
checkButton.addEventListener("click", () => {
  const text = palindromeInput.value;
  if(text === "") {
    alert("Please input a value");
    return;
  }
 

  if(checkPalindrome(text)) {
    resultParagraph.innerText = `${text} is a palindrome`;
  } 
   else {
    resultParagraph.innerText = `${text} is not a palindrome`;
  }
})