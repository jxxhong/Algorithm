import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] s = scan.next().split("");

        if(s[0].equals("N")||s[0].equals("n")){
            System.out.println("Naver D2");
        }
        else System.out.println("Naver Whale");
    }
}