function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Reverse the string
  let reverseStr = str.split("").reverse().join("");

  // Check if the reversed string is equal to the original string
  return reverseStr === str;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
