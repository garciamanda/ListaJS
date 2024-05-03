let valor = 5;

if (valor >= 1 && valor <= 10) {
    for (let i = 1; i <= 10; i++) {
      let resultado = valor * i;
      console.log(`${valor} x ${i} = ${resultado}`);
    }
  } else {
    console.log("Valor fora do intervalo permitido (1 a 10).");
  }