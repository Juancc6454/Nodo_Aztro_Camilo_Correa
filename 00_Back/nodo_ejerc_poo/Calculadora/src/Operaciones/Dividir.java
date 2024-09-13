package Operaciones;

public class Dividir extends Operacion {
    @Override
    public double ejecutar(double a, double b) {
        if (b != 0) {
            return a / b;
        } else {
            System.out.println("Error: No se puede dividir entre cero.");
            return Double.NaN; // Representa "Not-a-Number"
        }
    }
}

