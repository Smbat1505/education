function bind(context, fn) {
  return function (...arg) {
    fn.apply(context, [arg]);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person = { name: "Sem", age: 38, job: "Front-End" },
  person1 = { name: "Inga", age: 40, job: "Designer" };

bind(person, logPerson)();
bind(person1, logPerson)();
