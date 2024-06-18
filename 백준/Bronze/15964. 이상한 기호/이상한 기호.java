import java.util.Scanner;

public class Main {
    public static int func(int a, int b){
        return (a+b)*(a-b);
    }
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();
        int result = func(a,b);

        System.out.println(result);
    }
}