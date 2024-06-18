import java.util.Objects;
import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int count = 0;
        int checksum = 0;
        String[] a = scan.nextLine().split("");
        String[] b = scan.nextLine().split("");

        for(int i=0; i<a.length; i++){
            if(Objects.equals(a[i],b[0])){
                if(i+b.length>a.length) break;
                else {
                    for (int j = 0; j < b.length; j++) {
                        checksum = 0;
                        if (!Objects.equals(a[i + j], b[j])) {
                            checksum = 1;
                            break;
                        }
                    }
                    if (checksum == 0) {
                        count++;
                        i += b.length - 1;
                    }
                }
            }
        }

        System.out.println(count);
    }
}