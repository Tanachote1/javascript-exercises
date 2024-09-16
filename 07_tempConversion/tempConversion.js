const convertToCelsius = function(Fah) {
  let convert = Math.round((Fah - 32) * (5/9)*10) / 10;
  return convert
};

const convertToFahrenheit = function(Cel) {
  let convert = Math.round((Cel * 9/5 + 32) * 10) / 10;
  return convert
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
