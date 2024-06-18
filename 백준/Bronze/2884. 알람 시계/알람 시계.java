import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int a,b;
        a= scan.nextInt();
        b= scan.nextInt();
        
        if(b-45<0){
            a= a-1;
            if(a<0){
                a= a+24;
            }
            b= b+60;
        }
        System.out.println(a+" "+(b-45));
    }
}