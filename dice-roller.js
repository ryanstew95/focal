// Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.
// example of output: node dice-roller.js 3
// expected output: Rolled 3 dice: 2,6,5
// To generate a random number, you'll have to use the built-in Math.random.

const arg = process.argv.slice(2);
const rollDice = function(arg) {
  let result = [];
  for (let i = 0; i < arg; i++) {
    let randomNum = Math.floor(Math.random() * (6 - 1) + 1);
    result.push(randomNum);

  }
  return result;
};


