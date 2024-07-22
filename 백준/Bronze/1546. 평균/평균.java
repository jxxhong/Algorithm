import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int[] arr = new int[n];
        double sum = 0;
        int m = 0;
        for(int i = 0; i < n; i++){
            arr[i] = scan.nextInt();
            if(arr[i]>m) m = arr[i];
        }

        for(int a : arr){
            sum += (double)a/m*100;
        }

        System.out.println(sum/n);
    }
}