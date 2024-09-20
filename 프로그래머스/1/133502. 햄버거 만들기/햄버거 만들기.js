function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        // 스택의 마지막 4개 요소가 1, 2, 3, 1인지 확인
        if (stack.length >= 4) {
            let lastFour = stack.slice(-4);  // 스택의 마지막 4개를 확인
            if (lastFour.join('') === '1231') {
                stack.splice(-4, 4);
                answer++;
            }
        }
    }
    
    return answer;
}
