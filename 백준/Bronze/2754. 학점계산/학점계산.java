import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        double x = 0, y = 0;
        if (a.equals("F")) System.out.println("0.0");
        else {
            String[] b = a.split("");
            switch (b[0]) {
                case "A":
                    x = 4;
                    break;
                case "B":
                    x = 3;
                    break;
                case "C":
                    x = 2;
                    break;
                case "D":
                    x = 1;
                    break;
                default:
                    break;
            }
            switch (b[1]) {
                case "+":
                    y = 0.3;
                    break;
                case "0":
                    y = 0;
                    break;
                case "-":
                    y = -0.3;
                    break;
                default:
                    break;
            }
            System.out.println(x+y);
        }
    }
}