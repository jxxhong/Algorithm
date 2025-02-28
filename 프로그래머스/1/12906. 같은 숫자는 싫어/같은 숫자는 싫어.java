import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        int[] answer = {};
        
        ArrayList<Integer> array = new ArrayList<>();
        
        for(int n : arr) {
            if(array.size() == 0) {
                array.add(n);
            }
            else {
                if(array.get(array.size() - 1) != n) {
                    array.add(n);
                }
            }
        }

        return array.stream().mapToInt(Integer::intValue).toArray();
    }
}