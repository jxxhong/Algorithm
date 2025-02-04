function solution(record) {
    var answer = [];
    let list = [];
    let idList = {};
    
    record.map((content) => {
        content = content.split(' ');
        switch(content[0]) {
            case 'Enter':
                list.push(content[1] + ' Enter');
                idList[content[1]] = content[2];
                break;
            case 'Leave':
                list.push(content[1] + ' Leave');
                break;
            case 'Change':
                idList[content[1]] = content[2];
                break;
        }
    })
    
    list.map((a) => {
        a = a.split(' ');
        if(a[1] === 'Enter') answer.push(idList[a[0]]+'님이 들어왔습니다.')
        else answer.push(idList[a[0]]+'님이 나갔습니다.')
    })
    
    return answer;
}