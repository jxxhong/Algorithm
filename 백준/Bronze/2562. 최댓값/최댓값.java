import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int max=0, a=0;
        for(int i=0;i<9;i++){
            int n = scan.nextInt();
            if(n>max){
                max = n;
                a = i+1;
            }
        }
        System.out.println(max);
        System.out.println(a);
    }
}