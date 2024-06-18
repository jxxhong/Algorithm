import java.util.Scanner;

public class Main
{
    public static void main(String[] args) {
        int[] a = {1,1,2,2,2,8};
        int[] b = new int[6];
        int[] c = new int[6];

        Scanner Scan = new Scanner(System.in);

        for(int i =0; i<6; i++){
            b[i] = Scan.nextInt();
        }

        for(int i=0; i<6;i++){
            c[i] = a[i]-b[i];
        }
        for(int i =0; i<6; i++) {
            System.out.print(c[i]+" ");
        }
    }
}
