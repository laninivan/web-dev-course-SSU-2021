function getBinaryCode(s) {
    return s.split('').map(char => {
        let binCode = char.charCodeAt(0).toString(2);
        while (binCode.length < 8) {
            binCode = '0' + binCode;
        }
        return binCode;
    })
}



console.log(getBinaryCode('man'));
console.log(getBinaryCode('AB'));
console.log(getBinaryCode('wecking'));
console.log(getBinaryCode('Ruby'));
console.log(getBinaryCode('Yosemite'));