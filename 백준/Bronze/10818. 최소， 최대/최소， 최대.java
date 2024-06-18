import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int m = scan.nextInt();
        int min=m, max=m;
        for(int i=0;i<n-1;i++){
            m = scan.nextInt();
            if(m>max) max = m;
            if(m<min) min = m;
        }
        System.out.println(min+" "+max);
    }
}