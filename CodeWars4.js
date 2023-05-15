function isIsogram(str) {
    let lowCaseStr = str.toLowerCase();
    for (const char of lowCaseStr) {
        if (lowCaseStr.indexOf(char) !== lowCaseStr.lastIndexOf(char))
            return false;
    }
    return true;

}

console.log(isIsogram("zsWeaqm"))