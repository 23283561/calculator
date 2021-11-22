function limpar() {
    document.getElementById("xA").value = "";
    document.getElementById("yA").value = "";
    document.getElementById("xB").value = "";
    document.getElementById("yB").value = "";
    document.getElementById("display").value = "";
}

function calcularDistancia() {
    var xA = document.getElementById("xA").value;
    var xB = document.getElementById("yA").value;
    var yA = document.getElementById("xB").value;
    var yB = document.getElementById("yB").value;

    var primeiraParte = Math.pow((xB - xA), 2);
    var segundaParte = Math.pow((yB - yA), 2);
    var soma = primeiraParte + segundaParte;
    var resultado = Math.sqrt(soma);
    document.getElementById("display").value = resultado.toFixed(2);
}

function calcularPontomedio() {
    var xA = Number(document.getElementById("xA").value);
    var yA = Number(document.getElementById("yA").value);
    var xB = Number(document.getElementById("xB").value);
    var yB = Number(document.getElementById("yB").value);

    var primeira = (xA + xB) / 2;
    var segundo = (yA + yB) / 2;
    document.getElementById("display").value = `PM = (${primeira}, ${segundo})`;
}

function calcularCoeficiente() {
    var xA = Number(document.getElementById("xA").value);
    var yA = Number(document.getElementById("yA").value);
    var xB = Number(document.getElementById("xB").value);
    var yB = Number(document.getElementById("yB").value);

    var parteSuperior = yA - yB;
    var parteInferior = xA - xB;

    var m = parteSuperior / parteInferior

    document.getElementById("display").value = 'm = ${m}';

}

function calcularEquacaoreta() {
    var xA = Number(document.getElementById("xA").value);
    var yA = Number(document.getElementById("yA").value);
    var xB = Number(document.getElementById("xB").value);
    var yB = Number(document.getElementById("yB").value);

    var matriz = [
        [xA, xB, 1, xA],
        [yA, yB, 1, yA]
    ]


    var n1 = ((-1 * matriz[0][1]) * matriz[1][0]);
    var x1 = ((-1 * matriz[0][2]) * matriz[1][1]);
    var y1 = ((-1 * matriz[0][3]) * matriz[1][2]);


    var n2 = matriz[0][0] * matriz[1][1];
    var x2 = matriz[0][1] * matriz[1][2];
    var y2 = matriz[0][2] * matriz[1][3];

    var somaX = x1 + x2;
    var somaY = y1 + y2;
    var somaN = n1 + n2;

    somaX = (somaX > 0 ? `+${somaX}` : somaX);
    somaY = (somaY > 0 ? `+${somaY}` : somaY);
    somaN = (somaN > 0 ? `+${somaN}` : somaN);
    document.getElementById("display").value = `${somaX}x ${somaY}y ${somaN} = 0`
}