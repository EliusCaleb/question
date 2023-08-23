// Write a function that will take input from the user and check if it is palindrome, if the word is not palindrome then return it
// in the reverse order. For example "hello" is not a palindrome, it should return "olleh“

function isPalindromeOrReverse() {
  const userInput = prompt("Enter a word:");
  const cleanedInput = userInput.toLowerCase().replace(/\s/g, "");
  const isPalindrome =
    cleanedInput === cleanedInput.split("").reverse().join("");
  if (isPalindrome) {
    alert(userInput + " is a palindrome!");
    return userInput;
  } else {
    const reversedInput = userInput.split("").reverse().join("");
    alert(
      userInput + " is not a palindrome. Reversed, it is: " + reversedInput
    );
    return reversedInput;
  }
}
const result = isPalindromeOrReverse();
console.log("Result:", result);
