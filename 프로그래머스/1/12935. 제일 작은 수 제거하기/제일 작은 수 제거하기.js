function solution(arr) {
    var answer = [];
    let min = arr[0];
    
    if(arr.length === 1) arr[0] = -1;
    else for(let i = 1; i < arr.length; i++){
        if(arr[i] < min) min = arr[i];
    }
    
    let arr1 = arr.splice(0, arr.indexOf(min));
    let arr2 = arr.splice(arr.indexOf(min) + 1, arr.length)
    
    answer = arr1.concat(arr2);
    
    return answer;
}