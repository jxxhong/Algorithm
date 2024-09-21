function solution(myString) {
    var answer = [];
    myString.split('x').map(a => answer.push(a.length))
    return answer;
}