function getVowelCount(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return s
        .split('')
        .filter(letter => vowels.includes(letter.toLowerCase())).length;
}



console.log(getVowelCount('abracadabra'));
console.log(getVowelCount('ABRACADABRA'));
console.log(getVowelCount('o a kak ushakov lil vo kashu kakao'));
console.log(getVowelCount('my pyx'));