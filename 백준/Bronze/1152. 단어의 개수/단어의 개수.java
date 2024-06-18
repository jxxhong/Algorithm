import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int words = 0;
        String[] s = scan.nextLine().split(" ");
        words = s.length;
        for(int i=0; i<s.length; i++){
            if(s[i].equals("")) words--;
        }
        System.out.println(words);
    }
}