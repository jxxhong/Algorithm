import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        double a = 0;
        double b,c;
        for(int i=0; i<n; i++){
            a = scan.nextDouble();
            b = scan.nextDouble();
            c = scan.nextDouble();
            System.out.printf("$%.2f\n",a*b*c);
        }
    }
}