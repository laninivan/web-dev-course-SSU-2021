function isWordIsogram(s) {
    return new Set(s.toLowerCase()).size === s.length
}



console.log(isWordIsogram('Dermatoglyphics'));
console.log(isWordIsogram('aba'));
console.log(isWordIsogram('moOse'));
console.log(isWordIsogram(''));