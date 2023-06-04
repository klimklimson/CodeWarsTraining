
function solution(start, finish)
{
    let step = 0;
    while(start!==finish){
        if(start+3<=finish)
            start+=3;
        else
            start++;
        step++;
    }
    return step;
}
console.log(solution(1,5));