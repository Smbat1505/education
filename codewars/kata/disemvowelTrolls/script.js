function disemvowel(str) {
  return str.replace(/[aieou]/gi, "");
}

const string = "Hello world!, how are you?";

console.log(disemvowel(string));
