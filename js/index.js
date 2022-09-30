const txtInput = document.getElementById("input");
const btn = document.getElementById("btn");
const infoText = document.querySelector(".info-text");

txtInput.addEventListener("input", () => {
  if (txtInput.value.length === 0) {
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.7";
  } else {
    btn.style.pointerEvents = "auto";
    btn.style.opacity = "1";
  }
});

const isMatch = (str) => {
  return str.match(/[a-z0-9]/g); //Regex
};

const isPalindrome = (userInput) => {
  const textLower = userInput.toLowerCase();
  const alphanumericOnly = isMatch(textLower); // this an array
  const reverseTxt = isMatch(textLower).reverse(); // this an array

  if (alphanumericOnly.join("") === reverseTxt.join("")) {
    return `yes <span> '${userInput}' </span> is a palindrome`;
  } else {
    return `No! <span> '${userInput}' </span> is not a palindrome`;
  }
};

const checker = () => {
  const display = isPalindrome(txtInput.value);
  infoText.innerHTML = display;
  txtInput.value = "";
  btn.style.opacity = "0.7";
};
