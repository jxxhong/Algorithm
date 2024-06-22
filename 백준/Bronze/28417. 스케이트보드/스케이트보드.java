import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int[] run = new int[2];
        int[] skill = new int[5];
        int n = scan.nextInt();
        int[] winner = new int[n];
        int runMax = -1;

        for(int i=0;i<n;i++){
            runMax = 0;
            for(int j=0; j<2; j++){
                run[j] = scan.nextInt();
            }
            for(int a : run){
                runMax = Math.max(runMax, a);
            }
            for(int k=0; k<5; k++){
                skill[k] = scan.nextInt();
            }
            Arrays.sort(skill);
            winner[i] = runMax+skill[3]+skill[4];
        }

        Arrays.sort(winner);
        System.out.println(winner[winner.length-1]);
    }
}