function sortArray(arr){
    return arr.flat(Infinity).sort();
}

console.log(sortArray([[[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]]))
console.log(sortArray([]))
console.log(sortArray([[], []]))
console.log(sortArray([[], [1]]))
console.log(sortArray([[1, 3, 5], [-100], [2, 4, 6]]))