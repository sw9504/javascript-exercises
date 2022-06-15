const sumAll = function(from,to) {
    let sum = 0;

    if (from < 0 || to < 0 || 
        !Number.isInteger(from) || !Number.isInteger(to))
            return "ERROR";
        
    if (from > to){
        let aux = to;
        to = from;
        from = aux;
    }        

    for(let i=from;i<=to;i++ )
        sum += i;
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
