function convertToRoman(num) {
  if (num === 0) return ""; // Romans had no symbol for zero

  const symbols = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ];

  let result = "";

  // To handle subtractive notation (like IV = 4, IX = 9, etc.)
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

  // Handle numbers larger than 3999 (up to 100000)
  // Roman numerals traditionally stop at 3999,
  // but we can extend by repeating 'M' as needed.
  while (num >= 1000) {
    result += "M";
    num -= 1000;
  }

  // Handle the remaining part
  for (let [roman, value] of romanMap) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result.toUpperCase();
}

// Examples
console.log(convertToRoman(14));    // XIV
console.log(convertToRoman(798));   // DCCXCVIII
console.log(convertToRoman(4000));  // MMMM
console.log(convertToRoman(9999));  // MMMMMMMMMCMXCIX
console.log(convertToRoman(0));     // ""
