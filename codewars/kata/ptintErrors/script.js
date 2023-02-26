function printerError(s) {
  // your code
  let count = 0;
  for (const element of s) {
    if (element > "m") {
      count++;
    }
  }
  return count + "/" + s.length;
  // return (s.match(/[^a-m]/g)?.length || 0) + "/" + s.length;
}

let go = printerError("jkjhksdghjdhgjjjjjjjhjhj");

console.log(go);
