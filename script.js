function convertToRoman(num) {

    const symbols = [
        ['M', 1000], 
        ['CM', 900], 
        ['D', 500], 
        ['CD', 400], 
        ['C', 100], 
        ['XC', 90], 
        ['L', 50], 
        ['XL', 40], 
        ['X', 10], 
        ['IX', 9], 
        ['V', 5], 
        ['IV', 4], 
        ['I', 1]
    ];

    if (num === 0) return "N";

    let result = "";

    for (let [sym, val] of symbols) {
        while (num >= val) {
            result += sym;
            num -= val;
        }
    }

    return result;
}

module.exports = convertToRoman;   // 🔥 REQUIRED FOR CYPRESS TESTS

const express = require("express");
const convertToRoman = require("./script");  // IMPORTANT!!!

const app = express();
app.use(express.json());

app.post("/romanConverter", (req, res) => {
    const input = req.body.input;

    if (typeof input !== "number" || input < 0 || input > 100000) {
        return res.status(400).json({ error: "Invalid input" });
    }

    const roman = convertToRoman(input);
    res.json({ roman });
});

app.listen(3000, () => console.log("Server running on port 3000"));
