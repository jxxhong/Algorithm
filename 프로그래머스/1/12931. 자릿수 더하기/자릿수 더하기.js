function solution(n)
{
    var answer = 0;
    var a = n.toString().split("");
    a.forEach((a) => answer += parseInt(a))

    return answer;
}