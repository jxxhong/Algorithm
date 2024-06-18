import java.util.Scanner;

public class Main {
    public static long func(long a, long b){
        return (a+b)*(a-b);
    }
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        long a = scan.nextInt();
        long b = scan.nextInt();
        long result = func(a,b);

        System.out.println(result);
    }
}