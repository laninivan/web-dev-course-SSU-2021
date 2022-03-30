function getCoefficient(n, k) {

    var coefficient = getFactorial(n) /
        (getFactorial(k) * getFactorial(n - k))
    return coefficient == 1 ? "" : coefficient;
}

function getFactorial(n) {
    return n ? n * getFactorial(n - 1n) : 1n
}

function getVariables(n, i) {
    return getVariable("a", i).toString() + getVariable("b", n - i).toString()
}

function getVariable(name, degree) {
    switch(degree) {
        case 0:
            return ""
        case 1:
            return `${name}`
        default:
            return `${name}^${degree}`
    }
}

function  getFormulaOfTheDegreeSum (n) {
    var res = "";
    var isNegativeDegree = false;
    if (n == 0)
        return "1"
    else if (n < 0) {
        n *= -1
        res += "1/("
        isNegativeDegree = true
    }
    else if(!Number.isInteger(n) ||Math.abs(n)>200)
        return "Invalid input";

    for (var degree = n; degree >= 0; degree--) {
        var res =  res + getCoefficient(BigInt(n), BigInt(n - degree)).toString() +
            getVariables(n, degree).toString() +
            (degree == 0 ? "" : "+") +
            (isNegativeDegree && degree == 0 ? ")" : "")
    }
    return res
}



console.log(getFormulaOfTheDegreeSum(0))
console.log(getFormulaOfTheDegreeSum(1))
console.log(getFormulaOfTheDegreeSum(2))
console.log(getFormulaOfTheDegreeSum(-2))
console.log(getFormulaOfTheDegreeSum(3))
console.log(getFormulaOfTheDegreeSum(5))
console.log(getFormulaOfTheDegreeSum(201))
console.log(getFormulaOfTheDegreeSum(3.14))