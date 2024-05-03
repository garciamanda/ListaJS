let produtos = 5600;
let formadePagamento = 2;
let vezesaPagar = 13;


console.log('Escolha uma forma de pagamento: \n 1 - A vista \n 2 - Parcelado');
if (formadePagamento == 1) {
    console.log('Forma de pagamento selecionada: A vista');
    console.log("Você teve 2.5% de desconto");
    console.log("O preço com desconto é de: " + (produtos - (produtos * 0.025)));
} else if (formadePagamento == 2) {
    console.log('Forma de pagamento selecionada: Parcelado');
    if (vezesaPagar >= 2 && vezesaPagar <= 5) {
        console.log("O valor das parcelas (sem acréscimo ou desconto) é de: " + (produtos / vezesaPagar) + " por mês!");
    } else if (vezesaPagar >= 6 && vezesaPagar <= 10) {
        console.log("O valor das parcelas (com juros de 6%) é de: " + (produtos + (produtos * 0.06)));
    } else if (vezesaPagar >= 11 && vezesaPagar <= 15) {
        console.log("O valor das parcelas (com juros de 13%) é de: " + (produtos + (produtos * 0.13)));
    }
} 
