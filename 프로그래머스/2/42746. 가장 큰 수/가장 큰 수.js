function solution(numbers) {
    if(numbers.filter((k) => k !== 0).length === 0) return '0';
       
    numbers.sort((a, b) => {
        let m = a.toString();
        let n = b.toString();
        
        if(m + n > n + m) return -1;
        else if(n + m < m + n) return 1;
    })
    
    return numbers.join('');
}