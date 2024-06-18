import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int[] x = new int[n];
        int[] y = new int[n];
        int a,b,time=1001,save=-1;

        for(int i=0; i<n; i++){
            a = scan.nextInt();
            b = scan.nextInt();
            x[i] = b-a;
            y[i] = b;
        }

        for(int i=0; i<n; i++){
            if(x[i]>=0&&time>x[i]){
                time = x[i];
                save = y[i];
            }
        }
        System.out.println(save);
    }
}