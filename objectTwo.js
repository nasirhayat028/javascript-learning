
let obj = new Object() //declaration of obect

let objTwo = {} // we can declare object like this alsoo...


console.log(obj);
console.log(objTwo);


obj.name = "Nasir"
obj.email = "nasirhayat028@gmail.com"
obj.isLoggedIn = false

console.log(obj);

// obj in obj 


objTwo = {
    username: {
        username:{
            username: "nasirhayat028",
            id: 23032820
        },
        user:{
            name: "Nasir",
            email: "n....@gmail.com"
        }
    },
    Account: {
        accNumber: "0333-9495...",
        accPass: "N***55**"
    }
}

console.log(objTwo);
console.log(`This is user details`, objTwo.username); //further we can access each and single value from object easily

let obj1 = {name: 'nasir', age: 4}
let obj2 = { name: 'hayat', age: 10}


// let obj3 = {obj1, obj2}
// let obj3 = Object.assign({}, obj1, obj2)
let obj3 = {...obj1, ...obj2}
console.log(`HI this is obj3 `, obj3);

// multiple objects in single array

let hostel = [
    {
        florr: 1,
        room:22,
        students: 100
    },
    {
        florr: 2,
        room:20,
        students: 98
    },
    {
        florr: 3,
        room:22,
        students: 105
    },
    {
        florr: 4,
        room:22,
        students: 105
    },
]

console.log(hostel);

console.log(hostel[0]);

console.log(Object.keys(hostel));
console.log(Object.values(hostel));
console.log(Object.entries(hostel));

console.log(hostel.hasOwnProperty("room"));

