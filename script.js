const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputText = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    checkUserInput(numberInput);
});
numberInput.addEventListener("keydown", () => {
    if (KeyboardEvent.name === "Enter") {
        checkUserInput(numberInput);
    }
});

const checkUserInput = numberInput => {
    if (numberInput.value === "") {
        outputText.innerText = "Please enter a valid number";
    } else if (numberInput.value <= 0) {
        outputText.innerText = "Please enter a number greater than or equal to 1";
    } else if (numberInput.value >= 4000) {
        outputText.innerText = "Please enter a number less than or equal to 3999";
    } else {
        outputText.innerText = convertToRomanNumeral(numberInput);
    };
};

const convertToRomanNumeral = numberInput => {
    const romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let inputInt = parseInt(numberInput.value);
    let romanNumeral = ""
    for (let key in romanValues) {
        while (inputInt >= romanValues[key]) {
            romanNumeral += key;
            inputInt -= romanValues[key]; 
        };
    };
    return romanNumeral;
};