console.log('from index.js')


//this keeps the terminal open until you hit enter--it closes too fast!
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Press Enter to exit...", () => {
  rl.close();
});
