
let s = Symbol("mySymbol")

let info = {
    name: 'Nasir',
    age: 18,
    education: 'Fsc',
    email: 'nasirhayat028@gmail.com',
    [s ]: "keyPoint", // Symbol Declaration
    number: ["03339495197", "0333"]
}

console.log(info.name); 
console.log(info["age"]); // best way to access data from objects 
console.log(info[s]);
console.log(typeof info.s);


info.email = 'nasirhayat028@microsoft.com' // for updating value in object

console.log(info["email"]);

// Object.freeze(info) // Freez is use to never change data in object
info.email = 'nasirhayat028@microsoft.com' // after freezing the obj the value will never change..
console.log(info["email"]);
console.log(info["number"]);

// function in object

info.greeting= function(){
    console.log('Hello Dear, Welcome Here');
    
}

info.greetingTwo= function(){
    console.log(`Hello Dear, Welcome Here.. THis is ${this.name}`);
    
}

console.log(info.greeting());
console.log(info.greetingTwo());
