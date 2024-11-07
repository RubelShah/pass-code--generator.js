const passwordDisplay = document.getElementById('passwordDisplay');
const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const submitBtn = document.querySelector('.btn');

const LOWERCASE_CHAR_CODES = arrayForCodeRange(97,122);
const UPPERCASE_CHAR_CODES = arrayForCodeRange(65,90);
const NUBERCASE_CHAR_CODES = arrayForCodeRange(48,57);
const SYMBOLCASE_CHAR_CODES = arrayForCodeRange(33,47).concat(arrayForCodeRange(58,64)).concat(arrayForCodeRange(91,96)).concat(arrayForCodeRange(123,126));

characterAmountRange.addEventListener('input',syncInputNumber);
characterAmountNumber.addEventListener('input',syncInputNumber);

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const UppercaseInclude = includeUppercase.checked;
    const NumbersInclude = includeNumbers.checked;
    const Symbolsinclude = includeSymbols.checked;
    
    let password = generatePassword(UppercaseInclude,NumbersInclude,Symbolsinclude,characterAmount);
    passwordDisplay.innerHTML = password;
});


function generatePassword(UppercaseInclude,NumbersInclude,Symbolsinclude,characterAmountNumber){
    let characterCodes = LOWERCASE_CHAR_CODES;
    if(UppercaseInclude) characterCodes = characterCodes.concat(UPPERCASE_CHAR_CODES);
    if(NumbersInclude) characterCodes = characterCodes.concat(NUBERCASE_CHAR_CODES);
    if(Symbolsinclude) characterCodes = characterCodes.concat(NUBERCASE_CHAR_CODES);
    const passwordCharacters = [];

    for(let i = 0;  i<= characterAmountNumber;i++){
        const characterCode = characterCodes[Math.floor(Math.random() * characterCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
       
    }
    return passwordCharacters.join('');
}

function syncInputNumber(e){
    const value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}

function arrayForCodeRange(low,high){
    let array = [];
    for(let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}