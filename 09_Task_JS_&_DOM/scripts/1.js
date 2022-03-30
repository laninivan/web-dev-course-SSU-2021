function printTable() {
    var message = document.getElementById("getMessage").value;
    document.getElementById("getVowelCount").innerHTML = getVowelCount(message);
}

function resetTable() {
    document.getElementById("getMessage").value = "";
    document.getElementById("getVowelCount").innerHTML = "";
}

function getVowelCount(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return s
        .split('')
        .filter(letter => vowels.includes(letter.toLowerCase())).length;
}

