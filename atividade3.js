const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let decimal = 0;
let hexadecimal = "";

rl.question("Digite um número decimal: ", (answer) => {
  decimal = parseInt(answer);

  while (decimal > 0) {
    hexadecimal = (decimal % 16).toString(16) + hexadecimal;
    decimal = Math.floor(decimal / 16);
  }

  console.log(`O número hexadecimal é: ${hexadecimal}`);

  rl.close();
});
