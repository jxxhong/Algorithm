function solution(s) {
    var answer = 0;
    const arr = s.split(" ");
    let i = 0;
    let save = 0;
    while(i<arr.length){
        if(arr[i]==='Z') answer -= save;
        else answer += parseInt(arr[i]);
        save = arr[i++];
    }
    return answer;
}