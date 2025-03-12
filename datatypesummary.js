
// primitive  (String, boolean, Number, Symbol, bigIn)

let name = "Nasir Hayat"

let isLoggedIn = false

let outSideTemp = 23

let id = Symbol('123')

let anotherId = Symbol('123')

console.log(id == anotherId); // it will says false because symbol use for unique identification symbol gives unique value that not be equal like id != anotherId

// Refrences (non-primitive) => Array,Obiects, Functions.

let familyBrothers = ["Nasir", "Sudais", "Marwan","Roman"]

let myFunction = function (params) {
    console.log("It's my first function in javaa");
    
}
let myObj = {
    fName: "Nasir",
    regNo: 038,
}