import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        float w = scan.nextInt();
        float h = scan.nextInt();

        System.out.printf("%.1f",w*h/2);
    }
}