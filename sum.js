const args = process.argv;
console.log(args);
console.log(args.slice(-2));
let result = 0;

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}
console.log(result);