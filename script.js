const palindromeInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultParagraph = document.getElementById("result");


const checkPalindrome = (text) => {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9\u00C0-\u024F\u1E00-\u1EFF]/g, '');
  const reverse = cleaned.split("").reverse().join("");
  return cleaned === reverse;
}

checkButton.addEventListener("click", () => {
  const text = palindromeInput.value;
  if(text === "") {
    alert("Please input a value");
    return;
  }

  if(checkPalindrome(text)) {
    resultParagraph.innerText = `${text} is a palindrome`;
  } else {
    resultParagraph.innerText = `${text} is not a palindrome`;
  }
})