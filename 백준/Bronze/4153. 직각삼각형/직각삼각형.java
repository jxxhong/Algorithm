import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a, b, c;
        while (true) {
            a = scan.nextInt();
            b = scan.nextInt();
            c = scan.nextInt();

            if (a == 0 && b == 0 && c == 0) {
                break;
            }

            a *= a;
            b *= b;
            c *= c;

            if (a == (b + c) || b == (a + c) || c == (a + b))
                System.out.println("right");
            else System.out.println("wrong");
        }
    }
}