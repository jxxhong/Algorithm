import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        for (int i = 0; i < n; i++) {
            int sum = 0;
            int score = 1;
            String s = scan.next();
            for (int j = 0; j < s.length(); j++) {
                if (s.charAt(j) == 'O') {
                    sum += score;
                    score++;
                } else score = 1;
            }
            System.out.println(sum);
        }
    }
}