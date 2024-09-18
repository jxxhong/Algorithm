function solution(numbers, k) {
    let index = 0;
    for(let i = 1; i < k; i++){
        index = index + 2;
        if(index > numbers.length - 1){
            index -= numbers.length;
        }
    }
    return numbers[index];
}