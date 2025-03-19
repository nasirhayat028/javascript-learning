
function addMultiple( ...num){  // this is called rest op.. this is mostly use in shopping cards etc it stores alot of data rfom users in same variable
    return num
}

console.log(addMultiple(20, 45, 100, 2000));

let user = {
    name:'nasir',
    fName: 'umer'
}

function info(anyUser) {
    console.log(`hey this is ${anyUser.name} and my father is ${anyUser.fName}`); // this is the way to access obj data in function
}

info(user)

// now turn to access array in function 

let information = [ 'nasir', 'hayat']

function personalInfo (anyArr){
   return anyArr[0]
}

console.log(personalInfo(information));
console.log(personalInfo([1, 2]));
