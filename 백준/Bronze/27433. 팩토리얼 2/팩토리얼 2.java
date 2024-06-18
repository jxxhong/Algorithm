import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        long a = 1;
        int n = scan.nextInt();
        for(int i=0; i<n; i++){
            a *= i+1;
        }
        System.out.println(a);
    }
}