/*  El spread ...args arma un array con los elementos con los que
    se invoca una funcion */
    
const removeFromArray = function(arr,...args) {
    return arr.filter(element => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
