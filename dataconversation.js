
let num = "5959"

console.log(typeof num);
console.log(typeof(num));

let valueInNum = Number(num)
console.log(valueInNum);
console.log(typeof valueInNum);

// value which I tried in conversation
// "33" => 33
// "33abc" =>  NaN
// false => 0
// true => 1

// what if I want to change 1 or  0 in boolean 

let value = "Nasir"
console.table([typeof value, value])

let stringValue = Boolean(value)
console.table([typeof stringValue, stringValue])

// 1 => true 
// 0 => false 
// Nasir => true 

// precedure is same to convert something in string