function solution(my_string) {
    let answer = [];
    my_string.split('').map((_, i) => answer.push(my_string.slice(i, my_string.length)));
    return answer.sort();
}