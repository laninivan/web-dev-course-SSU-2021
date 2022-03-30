const digits = Array.from(Array(10).keys());
const words = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));


function genPass() {

    const count = generatePasswordLength();
    let pass = "";
    pass += genDigit().toString();
    pass += genWord().toLowerCase();
    pass += genWord().toUpperCase();

    for (let i = 3; i < count; i++) {
        let r = getRandomInt(2);
        if (r == 0) {
            pass += genWord();
        } else {
            pass += genDigit().toString();
        }
    }
    return shuffle(pass);
}

function genWord() {
    let r = getRandomInt(2);
    if (r == 0) {
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

console.log(genPass())
console.log(genPass())
console.log(genPass())
console.log(genPass())
console.log(genPass())
console.log(genPass())