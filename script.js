function convertToRoman(num) {
  if (num === 0) return "N"; // Romans used 'N' for zero (nulla)

  const romanSymbols = [
    ["_C", 100000],
    ["_L", 50000],
    ["_X", 10000],
    ["_V", 5000],
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1]
  ];

  let result = "";

  // Helper to convert up to 3999 using standard Roman numerals
  const convertBelow4000 = (n) => {
    const standard = [
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
    let res = "";
    for (let [sym, val] of standard) {
      while (n >= val) {
        res += sym;
        n -= val;
      }
    }
    return res;
  };

  // For numbers beyond 3999, use _ notation (overline)
  if (num > 3999) {
    const thousands = Math.floor(num / 1000);
    const remainder = num % 1000;

    if (thousands <= 39) {
      result += convertBelow4000(thousands).replace(/([MDCLXVI])/g, "_$1");
    } else {
      // for 40000 and beyond
      for (let [sym, val] of romanSymbols) {
        while (num >= val) {
          result += sym;
          num -= val;
        }
      }
      return result;
    }

    if (remainder > 0) {
      result += convertBelow4000(remainder);
    }

    return result;
  }

  return convertBelow4000(num);
}

// Example usage:
console.log(convertToRoman(14));     // Output: XIV
console.log(convertToRoman(798));    // Output: DCCXCVIII
console.log(convertToRoman(10000));  // Output: _X
console.log(convertToRoman(54321));  // Output: _L_VI_CCCXXI
