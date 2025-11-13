function convertToRoman(num) {

    const symbols = [
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

    if (num === 0) return "N"; // Romans had no zero, use "N" (nulla)

    let result = "";

    for (let [symbol, value] of symbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

function convert() {
    const n = parseInt(document.getElementById("numInput").value);
    document.getElementById("result").innerText = convertToRoman(n);
}
