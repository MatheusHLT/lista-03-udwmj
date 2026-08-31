function calcularVolume() {

    var r = prompt();
    r = parseFloat(r);

    var volume = Math.PI*((4/3)*(r*r*r));

    if (r <= 0) {
        document.write("<div id='volume'>" + "O valor do raio deve ser maior que 0." + "</div>");
    }
    else {
        document.write("<p><div id='volume'>" + volume + "</div></p>");
        document.write("<div id='info'>" + "Raio: " + r + "</div>")

    }
}

calcularVolume();
