import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));
        int n = Integer.parseInt(bufferedReader.readLine());

        StringTokenizer token;

        for(int i = 0; i<n; i++){
            token = new StringTokenizer(bufferedReader.readLine()," ");
            int a = Integer.parseInt(token.nextToken());
            int b = Integer.parseInt(token.nextToken());
            bufferedWriter.write(a+b+"\n");
        }
        bufferedWriter.flush();
    }
}