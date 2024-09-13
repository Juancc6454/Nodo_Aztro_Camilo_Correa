import Operaciones.*;

public class Main {
    public static void main(String[] args) {
        double num1 = 10;
        double num2 = 5;

        Sumar suma = new Sumar();
        Restar resta = new Restar();
        Multiplicar multiplicando = new Multiplicar();
        Dividir division = new Dividir();

        System.out.println("Suma: " + suma.ejecutar(num1, num2));
        System.out.println("Resta: " + resta.ejecutar(num1, num2));
        System.out.println("Multiplication: " + multiplicando.ejecutar(num1, num2));
        System.out.println("División: " + division.ejecutar(num1, num2));
    }
}


