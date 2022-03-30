const words = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
const digits = Array.from(Array(10).keys());


function genPass() {
    document.getElementById("generatePassword").innerHTML = generatePassword();
}

function resetPass() {
    document.getElementById("generatePassword").innerHTML = "";
}

function generatePassword() {
    let password = "";
    const length = generatePasswordLength();

    password += genDigit().toString();
    password += genWord().toLowerCase();
    password += genWord().toUpperCase();

    for (let i = 3; i < length; i++) {
        let v = getRandomInt(2);
        if (v == 0) {
            password += genWord();
        } else {
            password += genDigit().toString();
        }
    }

    return shuffle(password);
}

function genWord() {
    let v = getRandomInt(2);
    if (v == 0) {
        return words[getRandomInt(words.length)];
    } else {
        return words[getRandomInt(words.length)].toUpperCase();
    }
}

function genDigit() {
    return digits[getRandomInt(digits.length)];
}

function generatePasswordLength() {
    return getRandomIntInRange(6, 20)
}

function getRandomIntInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(str) {
    let arr = str.split(""),
        n = arr.length;

    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr.join("");
}
