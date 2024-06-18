import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        int a,b,c;
        ArrayList<Integer> x = new ArrayList<>();
        Scanner scan = new Scanner(System.in);
        a= scan.nextInt();
        b= scan.nextInt();

        for(int i =0; i<a; i++){
            c= scan.nextInt();
            if(c<b) x.add(c);
        }

        for(Integer y : x){
            System.out.print(y+" ");
        }
    }
}