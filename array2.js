let names = ["Nasir", "Suadis", "Marwan"]
let classes = [12, 6, 4]

console.log(names);
console.log(classes);

let combineArr = names.concat(classes) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(combineArr);

let nameClasses = [...names, ...classes] // mostly used this method to combine arrays
console.log(nameClasses);

let num = [1, 2, 3, [ 4, 5, [ 6, 7, 8], 9], 10]

console.log(num);

console.log(num.flat(Infinity)); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

 
let n = "Nasir"
let nn = "Marwan"
let nnn= "Roman"

let nAll = Array.of(n, nn, nnn)
console.log(nAll);
