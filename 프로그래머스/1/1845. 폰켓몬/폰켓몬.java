import java.util.*;

class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        int num = nums.length / 2;
        
        HashSet<Integer> hash = new HashSet<>();
        
        for(int n : nums) {
            hash.add(n);
        }
        
        if(hash.size() > num) {
            return num;
        }
        else return hash.size();
    }
}