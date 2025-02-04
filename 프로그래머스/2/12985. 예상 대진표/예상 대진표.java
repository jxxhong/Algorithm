class Solution
{
    public int solution(int n, int a, int b)
    {
        int answer = 0;

        while(n>0){
            answer = answer + 1;
            if((a==b-1&&(a/2!=b/2))||(a-1==b&&(a/2!=b/2))) break;
            if(a%2==1) a=a/2+1; else a=a/2;
            if(b%2==1) b=b/2+1; else b=b/2;
            n = n/2;
        }
        
        return answer;
    }
}