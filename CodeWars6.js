function disemvowel(str) {
    const regExp = /[aeiou]/gi

    str = str.replace(regExp, '');
    return str;
}

console.log(disemvowel("LOL this is the bulling comment"));