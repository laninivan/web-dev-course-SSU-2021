function zero(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    let current = 0
    return calculatFinal(exp,current)
}

function one(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    let current = 1
    return calculatFinal(exp,current)
}

function two(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    let current = 2
    return calculatFinal(exp,current)
}

function three(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    let current = 3
    return calculatFinal(exp,current)
}

function four(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    let current = 4
    return calculatFinal(exp,current)
}

function five(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    let current = 5
    return calculatFinal(exp,current)
}

function six(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    let current = 6
    return calculatFinal(exp,current)
}

function seven(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    let current = 7
    return calculatFinal(exp,current)
}

function eight(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    let current = 8
    return calculatFinal(exp,current)
}

function nine(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    let current = 9
    return calculatFinal(exp,current)
}

function plus(exp = ''){
    if(exp == "invalid input")
        return "invalid input"
    if(isSign(exp[0])){
        return "invalid input"
    }else{
        return '+' + exp
    }

}

function minus(exp){
    if(exp == "invalid input")
        return "invalid input"
    if(isSign(exp[0])){
        return "invalid input"
    }else{
        return '-' + exp
    }
}

function times(exp){
    if(exp == "invalid input")
        return "invalid input"
    if(isSign(exp[0])){
        return "invalid input"
    }else{
        return '*' + exp
    }

}

function dividedBy(exp){
    if(exp == "invalid input")
        return "invalid input"
    if(isSign(exp[0])){
        return "invalid input"
    }else{
        return '/' + exp
    }

}

function isSign(symbol){
    if(symbol == "+" || symbol == "-" || symbol == "*" || symbol == "/"){
        return true
    }
    return false
}

function calculate(first,operation, second)
{
    if(operation == "+"){
        return (second + first).toString()
    }else if(operation == "-"){
        return (second - first).toString()
    }else if (operation == "*"){
        return (second * first).toString()
    }else if (operation == "/"){
        if (second/first === Number.POSITIVE_INFINITY){
            return (Number.POSITIVE_INFINITY).toString()
        }
        return parseInt((second / first)).toString()
    }else{
        return "invalid input"
    }
}

function calculatFinal(exp, current){
    if(isSign(exp[0])){
        let arr = exp.split(/\+|\-|\*|\//)
        return calculate( Number(arr[1]),exp[0], Number(current)).toString()
    }else{
        return current.toString()
    }
}


console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))
console.log(eight(dividedBy(three())))
console.log(three(times(three(times(three())))))
console.log(two(plus(two(times(two(minus(one())))))))
console.log(zero(plus(one(dividedBy(one())))))
console.log(one(dividedBy(zero())))
console.log(one())