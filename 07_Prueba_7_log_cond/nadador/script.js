function calcularPromedio() {
    const prueba1 = parseFloat(document.getElementById('prueba1').value);
    const prueba2 = parseFloat(document.getElementById('prueba2').value);
    const prueba3 = parseFloat(document.getElementById('prueba3').value);
    const prueba4 = parseFloat(document.getElementById('prueba4').value);
    const prueba5 = parseFloat(document.getElementById('prueba5').value);

    const promedio = (prueba1 + prueba2 + prueba3 + prueba4 + prueba5) / 5;

    document.getElementById('promedioTiempo').innerText = `Promedio de tiempo: ${promedio.toFixed(2)} segundos`;
}
