import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        for(int i=0;i<n;i++){
            int m = scan.nextInt();
            String s = scan.next();
            String newS = "";

            for(int j=0; j<s.length(); j++){
                for(int k=0; k<m;k++){
                    newS += s.charAt(j);
                }
            }
            System.out.println(newS);
        }
    }
}