function cleanString(str) {
    return str.replace(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase();
}

const palindromes = function (string) {
    string = cleanString(string);
    if(string.length == 0 || string.length == 1) return true;
    else {
        if (string[0] == string[string.length - 1]) {
            string = string.slice(1, string.length - 1);
            return palindromes(string);
        }
        else return false;
    }
};

console.log(palindromes("racecara"));

// Do not edit below this line
module.exports = palindromes;
