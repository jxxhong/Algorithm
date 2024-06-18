import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int x = scan.nextInt();
        int y = scan.nextInt();

        int[][] a = new int[x][y];
        int[][] b = new int[x][y];
        int[][] c = new int[x][y];

        for(int i=0; i<x; i++){
            for(int j=0; j<y; j++){
                a[i][j] = scan.nextInt();
            }
        }
        for(int i=0; i<x; i++){
            for(int j=0; j<y; j++){
                b[i][j] = scan.nextInt();
            }
        }
        for(int i=0; i<x; i++){
            for(int j=0; j<y; j++){
                c[i][j] = a[i][j]+b[i][j];
            }
        }
        for(int i=0; i<x; i++){
            for(int j=0; j<y; j++){
                System.out.print(c[i][j]+" ");
            }
            System.out.println();
        }
    }
}