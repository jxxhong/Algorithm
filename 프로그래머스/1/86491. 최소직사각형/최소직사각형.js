function solution(sizes) {
    var answer = 0;
    let arr1 = [];
    let arr2 = [];
    
    sizes.map((a)=>{
        a.sort((m, n) => m - n)
    })
    console.log(sizes)
    
    for(let i = 0; i < sizes.length; i++){
        arr1.push(sizes[i][0]);
        arr2.push(sizes[i][1]);
    }
    answer = Math.max(...arr1) * Math.max(...arr2);
    
    return answer;
}