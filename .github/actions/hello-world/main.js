const core = require("@Actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");

console.log(`Hello ${firstGreeting}`);
console.log(`Hello ${secondGreeting}`);

if (thirdGreeting) {
  console.log(`Hello ${thirdGreeting}`);
}
