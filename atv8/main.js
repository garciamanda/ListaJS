function calcularIMC() {
    
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    
    var imc = peso / (altura * altura);

    
    let resultado = "";
    switch (true) {
        case (imc < 18.5):
            resultado = "Abaixo do peso";
            break;
        case (imc >= 18.5 && imc < 25):
            resultado = "Peso normal";
            break;
        case (imc >= 25 && imc < 30):
            resultado = "Sobrepeso";
            break;
        case (imc >= 30):
            resultado = "Obeso";
            break;
        default:
            resultado = "Números inválidos";
    }

    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Isso indica que você está " + resultado + ".";
}
