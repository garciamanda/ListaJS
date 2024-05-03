function calcularMedia(nota1, nota2, nota3, nome) {

    var media = (nota1 + nota2 + nota3) / 3;
    alert(`A média de ${nome} é ${media.toFixed(0)}.`);
    console.log(`Nota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}`);
}

window.onload = calcularMedia(7, 8, 9, "Amanda");