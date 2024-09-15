function solution(numbers) {
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    num.map((a,i) => numbers = numbers.replaceAll(a,i))
    return parseInt(numbers);
}