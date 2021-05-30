// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function calcularIMC() {
    var formulario = document.getElementById("formulario");

    var peso = formulario.peso.value;
    var altura = formulario.altura.value;

    var imc = peso / (altura * altura);

    formulario.imc.value = imc;

}

function calcular_media() {
    var notas = document.getElementById("notas");

    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    var media = (nota1 + nota2) / 2;

    notas.media.value = media;
    
}