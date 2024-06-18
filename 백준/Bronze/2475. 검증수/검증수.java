import java.util.Scanner;

public class Main {
    public static int func(int[] a){
        int sum = 0;

        for(int i=0; i<5; i++){
            sum += a[i] * a[i];
        }

        return sum;
    }
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int[] a = new int[5];

        for(int i = 0 ; i<5; i++){
            a[i] = scan.nextInt();
        }

        int b = func(a);
        System.out.println(b%10);
    }
}