
let passwordLength = 8;

let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;

const passwordRangeInputEl = document.getElementById("passRangeInput");
const passRangeValueEl = document.getElementById("passRangeValue");
const generateBtnEl = document.getElementById("genBtn");
const renderPassEl = document.getElementById('passwordShow');
const copyPassEl = document.getElementById('copyBtn');

// password generator function

const generatePassword = (passwordLength) =>{

    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    const numbers = isNumbers ? '1234567890' : '';
    const symbols = isSymbols ? '!@#$%&()_+*' : '';

    const passwordChar = lowerCaseLetters + upperCaseLetters +  numbers +   symbols;

    let password = "";
    for(let i = 0; i < passwordLength; i++ ){
        const charIndex = Math.floor(Math.random() * passwordChar.length);
        password += passwordChar[charIndex];
    }
    // Using Math.random, got random charIndex of passwordChar string. Storing it in password.

    return password;
}

// slider function and password length finder

passwordRangeInputEl.addEventListener("input", (e) =>{
    passwordLength= +e.target.value;
    passRangeValueEl.innerText = passwordLength;
});

// Render password using user input

generateBtnEl.addEventListener("click", () =>{

    const checkUpperCaseEl = document.getElementById('upperCase');
    const checkNumbersEl = document.getElementById('numbers');
    const checkSymbolsEl = document.getElementById('symbols');

    isUpperCase = checkUpperCaseEl.checked;
    isNumbers = checkNumbersEl.checked;
    isSymbols = checkSymbolsEl.checked;

    const renderPassword = generatePassword(passwordLength);
    renderPassEl.innerHTML = renderPassword;
});

// copy to clipboard feature

copyPassEl.addEventListener('click', (e) =>{
    if(renderPassEl.innerText.length > 0){
        navigator.clipboard.writeText(renderPassEl.innerText).then(() =>{
            Toastify({
                text: "Copied to clipboard.",
                className: "info",
                style: {
                  background: "#028391",
                }
              }).showToast();
        }).catch((err) =>{
            Toastify({
                text: "Could not copy.",
                className: "info",
                style: {
                  background: "#EE4E4E",
                }
              }).showToast();
        });
    }
} );