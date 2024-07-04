import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String code = scan.next();
        String s;
        int count = 0;
        int n = scan.nextInt();

        for (int i = 0; i < n; i++) {
            s = scan.next();
            for (int j = 0; j < 5; j++) {
                if (code.charAt(j) != s.charAt(j)) break;
                else if (j == 4 && code.charAt(j) == s.charAt(j)) count++;
            }
        }
        System.out.println(count);
    }
}