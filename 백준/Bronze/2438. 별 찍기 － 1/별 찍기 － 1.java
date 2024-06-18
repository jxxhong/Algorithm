import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        String star = "";
        for(int i=0; i<a; i++){
            star += "*";
            System.out.println(star);
        }
    }
}