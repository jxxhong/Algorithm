function solution(nums) {
    let n = nums.length / 2;
    let hash = {}
    
    nums.map((a) => {
        if(!(hash[a])) hash[a] = 1;
        else hash[a] += 1
    })
    
    let m = Object.keys(hash).length;
    
    if(m > n) return n;
    if(m <= n) return m;
}