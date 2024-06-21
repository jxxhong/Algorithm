import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int sum =0;
        sum +=scan.nextInt();

        if(n==1) System.out.printf("%d %d",sum/24, sum%24);
        else {
            for (int i = 0; i < n - 1; i++) {
                sum += scan.nextInt() + 8;
            }

            System.out.printf("%d %d", sum / 24, sum % 24);
        }


    }
}