import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int h = scan.nextInt();
        int m = scan.nextInt();
        int s = scan.nextInt();
        int add = scan.nextInt();

        if (add == 0) {
            System.out.println(h + " " + m + " " + s);
        } else {
            h += add / 3600;
            m += add % 3600 / 60;
            s += add % 3600 % 60;
            if (s > 59) {
                m++;
                s -= 60;
            }
            if (m > 59) {
                h++;
                m -= 60;
            }
            if (h > 23) {
                h = h % 24;
            }
            System.out.println(h + " " + m + " " + s);
        }
    }
}