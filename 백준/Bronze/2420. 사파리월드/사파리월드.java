import java.util.Scanner;
import java.math.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long a =scanner.nextInt();
        long b =scanner.nextInt();
        long x = Math.abs(a-b);
        System.out.println(x);
    }
}