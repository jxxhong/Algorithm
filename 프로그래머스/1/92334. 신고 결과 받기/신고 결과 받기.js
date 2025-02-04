function solution(id_list, report, k) {
    var answer = [];
    let reportList = {};
    let reported = {};
    let mail = {};
    
    id_list.map((id) => mail[id] = 0);
    
    report.map((s) => {
        s = s.split(' ');
        if(!(reportList[s[0]])) reportList[s[0]] = [];
        if(!(reported[s[1]])) reported[s[1]] = 0;
        
        if(!(reportList[s[0]].includes(s[1]))) {
            reportList[s[0]].push(s[1]);
            reported[s[1]] += 1;
        }
    })
    
    for(const key in reportList) {
        reportList[key].map((a) => {
            if(reported[a] >= k) mail[key] += 1;
        }) 
    }
    
    for(const id in mail) {
        answer.push(mail[id])
    }
    
    
    return answer;
}