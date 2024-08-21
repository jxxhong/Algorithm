function solution(num) {
    var answer = '';
    console.log(num%2)
    answer = num%2===1||num%2==-1?"Odd":"Even";
    console.log(answer)
    return answer;
}