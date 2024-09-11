function solution(numbers, direction) {
    let a;
    if(direction === 'left'){
        a = numbers[0];
        numbers.shift();
        numbers.push(a);        
    }else{
        a = numbers[numbers.length - 1];
        numbers.pop();
        numbers.unshift(a);
    }
    return numbers;
}