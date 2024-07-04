import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String s = "";
        String k = "";
        int count = 0;

        while (true) {
            s = scan.next();
            count = 0;
            if (s.equals("#")) break;

            for (int i = 0; i < s.length() - 1; i++) {
                if (s.charAt(i) == '1') {
                    count++;
                }
            }
            if (count % 2 == 1) {
                if (s.endsWith("e")) {
                    k = s.replace('e', '1');
                } else if (s.endsWith("o")) {
                    k = s.replace('o', '0');
                }
            } else {
                if (s.endsWith("e")) {
                    k = s.replace('e', '0');
                } else if (s.endsWith("o")) {
                    k = s.replace('o', '1');
                }
            }

            System.out.println(k);

        }
    }
}