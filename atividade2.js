const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let decimal = 0;
let binario = "";

rl.question("Digite um número decimal: ", (answer) => {
  decimal = parseInt(answer);

  while (decimal > 0) {
    binario = (decimal % 2) + binario;
    decimal = Math.floor(decimal / 2);
  }

  console.log(`O número binário é: ${binario}`);

  rl.close();
});
