function calcularJurosC() {
    var c = parseFloat(prompt("Digite o capital inicial:"));
    var i = parseFloat(prompt("Digite a pocentagem da taxa de juros:"));
    i = i/100;
    var n = parseFloat(prompt("Digite o prazo (tempo) de investimento:"));

    var m = c*((1+i)**n);

    document.write("<p><div id='c'>" + m + "</div></p>");
    document.write("<div id='info'>" + "Capital Inicial: " + c + "<br> Taxa de Juros: " + i + "<br> Prazo: " + n + "</div>");


}

calcularJurosC();