import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = scan.nextInt();
        int b, sum = 0;
        Stack<Integer> a = new Stack<>();

        for (int i = 0; i < n; i++) {
            b = scan.nextInt();
            if (b == 0) a.pop();
            else a.add(b);
        }

        for (int c : a) {
            sum += c;
        }

        System.out.println(sum);
    }
}