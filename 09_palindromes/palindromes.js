const palindromes = function (str) {
    let clearStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"").toLowerCase();
    let len = clearStr.length;
    
    for(let i=0; i< (len-1)/2; i++)
        if(clearStr[i] !== clearStr[len-1-i]) return false;

    return true;
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));
// Do not edit below this line
module.exports = palindromes;
