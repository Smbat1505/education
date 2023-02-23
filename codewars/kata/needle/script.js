function findNeedle(haystack) {
  const index = haystack.findIndex((item) => item === "needle");
  return `found the needle at position ${index}`;
}

const haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];
const result = findNeedle(haystack);
console.log(result); // "found the needle at position 5"
