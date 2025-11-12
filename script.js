const fs = require("fs");
const input = parseInt(fs.readFileSync(0, "utf8").trim(), 10);

function convertToRoman(num) {
  if (num === 0) return "";

  const romanMap = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  while (num >= 1000) {
    result += "M";
    num -= 1000;
  }

  for (let [symbol, value] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

console.log(convertToRoman(input));
