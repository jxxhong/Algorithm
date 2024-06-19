import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int sum = 0;
        for(int i=0; i<n; i++){
            sum += i+1;
        }
        System.out.println(sum);

        sum = 0;
        for(int i=0; i<n; i++){
            sum += i+1;
        }
        System.out.println(sum*sum);

        sum = 0;
        for(int i=0; i<n; i++){
            sum += (i+1)*(i+1)*(i+1);
        }
        System.out.println(sum);
    }
}