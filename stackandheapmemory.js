
// Stack (Primitive) 
// Heap (Non-Primitive)

let name = "Nasir"

let fName=name // In stack memory we get copy and we can access this while in heap we just get refrence not copy

console.log(fName);

fName = "Umer"

console.log(fName); //this is stack memory


// now object 

let founder = {
    name: "Nasir",
    email: "nasirhayat028@gmail.com"
}

let founder2 = founder

console.log(founder2);

founder2.email = "umerhayat...@gmail.com"

console.log(founder.email);
console.log(founder2.email);  //in this the email will change in both in founder and in founder2 alsobecause it access the data from same place not from copy while in stack we get a copy of file in which we can change easily
