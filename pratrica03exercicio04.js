function calcularArea() {

    var r = prompt("Digite o raio do circulo:");
    r = parseFloat(r);

    var area = Math.PI * (r * r);

    document.write("<p><div id='area'>" + area + "</div></p>");
    document.write("<div id='info'>" + "Raio: " + r + "</div>")
}

calcularArea();