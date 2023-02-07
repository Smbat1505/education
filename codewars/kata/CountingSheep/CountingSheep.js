"use strict";

// TODO: Here is a JavaScript function that takes an array of boolean values and returns the count of "true" values, which represent the number of sheep present. This function also checks for bad values like null or undefined:

function countSheep(arrayOfSheep) {
  let count = 0;
  for (const element of arrayOfSheep) {
    if (element === true) {
      count++;
    } else if (element === null || element === undefined) {
      return "Invalid Value";
    }
  }
  return count;
}

// TODO : You can use this function by passing an array of boolean values to it, like this:

const arrayOfSheep = [true, true, false, true, undefined, true];
const count = countSheep(arrayOfSheep);
console.log(count); // Output: "Invalid Value"

//========================================================================================================================================================

// Or an alternative option, taking into account the standard JavaScript S3800

//TODO: Here is the JavaScript function,  which takes an array of maced values and returns the number of “True” values, which are the number of people present. This also checks for poor values, such as NULL or UndEfined, in accordance with the rule of the S3800 of the JavaScript standard:

function countSheep1(arrayOfSheep) {
  let count = 0;
  for (const sheep of arrayOfSheep) {
    if (sheep === true) {
      count++;
    } else if (sheep === null || sheep === undefined) {
      throw new TypeError("Invalid Value");
    }
  }
  return count;
}
const arrayOfSheep1 = [true, true, false, true, null, true];
try {
  const count = countSheep(arrayOfSheep);
  console.log(count);
} catch (error) {
  console.error(error.message); // Output: "Invalid Value"
}

//========================================================================================================================================================

// TODO: Rus.
/* Согласно правилу S3800 из стандарта JavaScript, это считается запахом кода для возврата различных типов значений в разных путях кода. Это может сделать функцию труднее понять и поддерживать. Чтобы избежать этой проблемы, рекомендуется вернуть один и тот же тип значения из функции во всех путях кода. Однако существуют исключения из этого правила для функций, которые возвращают это или выражения, имеющие тип, которые игнорируются. */

// TODO: Eng.
/* According to the S3800 rule from the JavaScript standard, this is considered the smell of code for the return of various types of values in different code paths. This can make a function more difficult to understand and maintain. To avoid this problem, it is recommended to return the same type of value from the function in all code paths. However, there are exceptions to this rule for functions that return it or expressions that have a type that are ignored. */
