function calcularRectangulo() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const area = base * altura;
    const perimetro = 2 * (base + altura);
    document.getElementById('areaRect').innerText = area.toFixed(1);
    document.getElementById('perimetroRect').innerText = perimetro.toFixed(1);
}

function calcularCirculo() {
    const radio = parseFloat(document.getElementById('radio').value);
    const area = Math.PI * Math.pow(radio, 2);
    const perimetro = 2 * Math.PI * radio;
    document.getElementById('areaCirc').innerText = area.toFixed(1);
    document.getElementById('perimetroCirc').innerText = perimetro.toFixed(1);
}
