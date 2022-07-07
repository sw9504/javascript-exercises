const fibonacci = function(num) {

    let fibo = [1,1];
    num = parseInt(num);

    if(num <= 0) return "OOPS";
    else if(num === 1 || num === 2) return 1;
    else {
        let last = 0;
        let j = 0;

        for (let i = 3;i<=num;i++) {
            last = fibo[j] + fibo[++j];
            fibo.push(last);
        }

        return last;
    }
};

// Do not edit below this line
module.exports = fibonacci;
