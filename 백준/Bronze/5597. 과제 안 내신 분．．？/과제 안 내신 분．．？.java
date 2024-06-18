import java.io.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        int n;
        int k = 0;
        int[] student = new int[30];
        int[] f = new int[2];
        Scanner scan = new Scanner(System.in);

        for(int i=0; i<28; i++){
             n = scan.nextInt();
             student[n-1] = 1;
        }

        for(int j=0; j<30; j++){
            if(student[j]!=1){
                f[k] = j;
                k++;
            }
        }

        if(f[0]>f[1]){
            int temp = f[1];
            f[1] = f[0];
            f[0] = temp;
        }

        System.out.println(f[0]+1);
        System.out.println(f[1]+1);
    }
}