const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let clockExterno = 0;
let multiplicador = 0;
let clockInterno = 0;

rl.question("Digite o valor do clock externo em MHz: ", (answer) => {
  clockExterno = parseInt(answer);

  rl.question("Digite o valor do multiplicador: ", (answer) => {
    multiplicador = parseInt(answer);

    clockInterno = (clockExterno * multiplicador) / 1000;

    console.log(`A velocidade do clock interno é: ${clockInterno} GHz`);

    rl.close();
  });
});
