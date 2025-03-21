//scope  
{} // the

function one(){
    let name = "Nasir"

    function two(){
        let lastName= " Hayat"

        // here i can acces data from one fuction because this fun is also in one function scope...

        console.log(name + lastName); // it will display Nasir Hayat
        
    }

    // if i calll some thing heree of two function it will show error because the scope of function two..
    // console.log(lastName);   //this line will generate error 
    two()
}

one()

// now lets see in if statement.....

if (true) {
    username = "nasirhayat028"

    if (true) {
        
        fName = "Nasir Hayat"

        console.log(`the ${fName} have unique username which is ${username}`);
        
    }
}