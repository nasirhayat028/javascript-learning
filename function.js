
function myInfo(name) {
    name = 'Nasir Hayat'
    fName = "Umer Hayat"
    contactNo = 923339495197
    email = "nasirhayat028@gmail.com"
    qualification = "BSCS"
    
    console.log(`Hey, I'm ${name} and my father name is ${fName}`);
    
}

myInfo();

function addition(n, n){
    res = n+n // Adding two numbers
    console.log(res) 
    return res
}
addition(9, 100) // Output: 109


function subtraction(n, n){
    console.log(n - n)  // another option to display values ....
}

subtraction(8, 4)

// input user value displaying 

function username(name){
 return `${name} is your username`
}

// console.log(username("nasirhayat028"));

// showing message to user that you leave blank username 

function username(name){
    if (name === undefined){            // this if statement will show message if someone leave blank the username
        console.log("Enter any username");
        return
    }
    return `${name} is your username`
   }
   
//    console.log(username());

   
function username(name){
    if (!name){            // Another way to show message if someone leave blank the username
        console.log("Enter any username");
        return
    }
    return `${name} is your username`
   }
   
//    console.log(username());

   function username(name = "nasir"){   // in this if someone leave username blank it will not be undefiend it automatically takes nasir
    return `${name} is your username`
   }
   
   console.log(username());
