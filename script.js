function convertToRoman(num) {
  if (num === 0) return ""; // Romans had no zero

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

  // For numbers above 3999, just repeat 'M' as needed
  while (num >= 1000) {
    result += "M";
    num -= 1000;
  }

  for (let [roman, value] of romanMap) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

// ✅ Test Cases
console.log(convertToRoman(14));    // XIV
console.log(convertToRoman(798));   // DCCXCVIII
console.log(convertToRoman(3999));  // MMMCMXCIX
console.log(convertToRoman(4000));  // MMMM
console.log(convertToRoman(10000)); // MMMMMMMMMM
console.log(convertToRoman(99999)); // M repeated 99 times + CMXCIX
console.log(convertToRoman(0));     // ""
