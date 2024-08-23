function calcular() {
    const baseMayor = parseFloat(document.getElementById('baseMayor').value);
    const baseMenor = parseFloat(document.getElementById('baseMenor').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);

    const area = ((baseMayor + baseMenor) / 2) * altura;

    const litrosPesticida = area * 1.5;

    const perimetro = baseMayor + baseMenor + lado1 + lado2;

    document.getElementById('litrosPesticida').innerText = `Litros de pesticida necesarios: ${litrosPesticida.toFixed(2)} L`;
    document.getElementById('metrosCerca').innerText = `Metros de cerca eléctrica necesarios: ${perimetro.toFixed(2)} m`;
}
