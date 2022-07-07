const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
  let acum = 0;
  for(let i=0; i< arr.length;i++)
    acum += arr[i];
  
  return acum;
};

const multiply = function(arr) {
  let acum = 1;

  for(let i=0; i< arr.length;i++)
    acum = acum * arr[i];
  
  return acum;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let acum = 1;
  
	if(a === 1 || a === 0) return 1;

  else {
    for(let i=2; i <= a;i++)
      acum = acum * i;
    }
  return acum;
    
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
