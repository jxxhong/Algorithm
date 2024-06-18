import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int[] x = new int[n];
        int a,b,save=0,fast=1000;
        for(int i=0; i<n; i++){
            a = scan.nextInt();
            b = scan.nextInt();
            x[i] = b-a;
            if(b-a>=0&&b-a<fast){
                fast = b-a;
                save = b;
            }
        }

        if(fast==1000) save=-1;
        System.out.println(save);
    }
}