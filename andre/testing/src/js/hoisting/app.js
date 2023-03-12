/* var favouriteFood = "graoes";

var foodThoughts = function () {
  console.log("Original favoutite food: " + favouriteFood);
  var favouriteFood = "sushi";

  console.log("New favourite food: " + favouriteFood);
};

foodThoughts();
 */

function bigBrother() {
  function littleBrother() {
    return "it is me!";
  }
  return littleBrother();
  function littleBrother() {
    return "no me!";
  }
}

// Before running this code, what do you think the output is?
// bigBrother();
console.log(bigBrother());

function married(person1, person2) {
  console.log("arguments", arguments);
  console.log(Array.from(arguments));

  return `${person1} is now married to ${person2}`;
}

function marry2(...args) {
  console.log("arguments", args);
  console.log(Array.from(arguments));

  return `${args[0]} is now married to ${args[1]}`;
}

// married("Tom", "Tina");
console.log(married("Tom", "Tina"));
console.log(marry2("Ben", "Lola"));
