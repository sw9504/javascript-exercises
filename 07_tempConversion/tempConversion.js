const ftoc = function(fTemp) {
  return round((fTemp - 32) * (5/9));
};

const ctof = function(cTemp) {
  return round(((9/5) * cTemp + 32));
};

const round = function (num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
