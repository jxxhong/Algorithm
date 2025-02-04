function solution(want, number, discount) {
    var answer = 0;
    let check = true;
    let wishList = {}
    
    want.map((item, i) => {
        wishList[item] = number[i];
    })
    
    for(let i = 0; i < discount.length - 9; i++) {
        let newList = Object.assign({}, wishList)
        check = true;
        for(let j = i; j < i + 10; j++) {
            if(newList[discount[j]]) newList[discount[j]] -= 1;
        }
        for(const key in newList) {
            if(newList[key] !== 0) check = false;
        }
        if(check) answer++;
    }
    
    return answer;
}