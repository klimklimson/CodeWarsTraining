function toCamelCase(str) {
    const regExp = /-|_/g;
    let res="";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_' || str[i] === '-') {
            res += str.charAt(i + 1).toUpperCase();
            i++;
        }
        else
            {
                res += str[i];
            }
    }
    res = res.replace(regExp, '');
    return res;
}

console.log(toCamelCase("Man_of-culture"));