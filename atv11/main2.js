var n1 = 458;
var n2 = 50;
var n3 = 32;

if (n1 === n2 || n1 === n3 || n2 === n3){
    alert("Você repetiu algum número na digitação")
} else {
    var soma = n1 + n2 + n3;
    var media = soma / 3;
    var produto = n1 * n2 * n3;

    var menor = Math.min(n1,n2,n3);
    var maior = Math.max(n1,n2,n3);

    console.log("Soma: "+soma)
    console.log("Média: "+media)
    console.log("Produto: "+produto)
    console.log("Menor desses números: "+menor)
    console.log("Maior desses números: "+maior)


}