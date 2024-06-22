import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int count = 0;
        boolean[] a;
        int[] z = new int[n];

        for(int i = 0; i < n; i++){
            a = new boolean[scan.nextInt()];
            Arrays.fill(a,true);
            count = 0;

            for(int j = 1; j < a.length + 1; j++){
                for(int k = 0; k< a.length; k++) {
                    if ((k + 1) % (j + 1) == 0) {
                        if (a[k]) a[k] = false;
                        else if (!a[k]) a[k] = true;
                    }
                }
            }
            for(boolean t : a){
                if(t) count++;
            }
            z[i] = count;
        }

        for(int x : z){
            System.out.println(x);
        }
    }
}