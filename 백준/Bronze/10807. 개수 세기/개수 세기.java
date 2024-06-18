import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        int a,b,n;
        int count = 0;
        ArrayList<Integer> x = new ArrayList<>();
        Scanner scan = new Scanner(System.in);
        n = scan.nextInt();

        for(int i=0; i<n; i++){
             a = scan.nextInt();
             x.add(a);
        }

        b = scan.nextInt();

        for(Integer y : x){
            if(y==b) count++;
        }

        System.out.print(count);
    }
}