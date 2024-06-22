import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        while(true) {
            int n = scan.nextInt();
            String s = String.valueOf(n);
            boolean a = true;

            if(n==0){
                break;
            }
            for(int i = 0; i < s.length()/2; i++){
                if(s.charAt(i)!=s.charAt(s.length()-i-1)){
                    a = false;
                    break;
                }
            }
            if(!a) System.out.println("no");
            else System.out.println("yes");
        }
    }
}