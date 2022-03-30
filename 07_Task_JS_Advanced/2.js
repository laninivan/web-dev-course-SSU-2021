function getLettersWithPartitions(letters){
    var res = "|"
    for (var i = 0; i < letters.length; i++) {

        res = res + " " + letters[i] + " |"
    }
    return res;
}

function getRowHorizon(count){
    var res = "+"
    for (var i = 0; i < count; i++) {
        res = res + "-".repeat(3) +"+"
    }
    return res
}


function getTable(m,n,text){
    const error = "Invalid input";
    if(!Number.isInteger(n) || !Number.isInteger(m) ||
        m <= 0 || n <= 0
        || m*n < text.length)
        return error;

    var res = ""
    var resultLettesCount = 0
    for (var row = 0; row < m; row++) {
        var letters = ""
        if (resultLettesCount <= text.length - 1)
            letters = text.substring(resultLettesCount, resultLettesCount + n);
        else
            letters = " ".repeat(n)
        resultLettesCount+=n
        res += getRowHorizon(n) + "\n" + getLettersWithPartitions(letters) + "\n";
    }
    res = res + getRowHorizon(n);
    return res;
}




console.log(getTable(4,4,"Hello World!"))
console.log(getTable(4,3,"Nice pattern"))
console.log(getTable(3,4,"Nice pattern"))