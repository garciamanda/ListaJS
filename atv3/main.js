function calcularIMC() {
    
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    
    var imc = peso / (altura * altura);

    
    var resultado = "";
    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        resultado = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obeso";
    }

    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2) + ". Isso indica que você está " + resultado + ".";
}
