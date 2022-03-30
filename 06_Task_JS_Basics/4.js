function getFormatString(str) {
    let formatString =  str.split('').reduce((result,current,i)=>{
        result += "-"+current.toUpperCase()+current.toLowerCase().repeat(i)
        return result
    })
    formatString = formatString[0].toUpperCase() + formatString.slice(1);
    return formatString;
};




console.log(getFormatString('abcd'));
console.log(getFormatString('RqaEzty'));
console.log(getFormatString('cwAt'));