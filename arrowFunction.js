
// THIS  the concept of this 
let info = {
    name: "Nasir",
    fName: "Umer Hayat",
    
    contact: function () {
        email = "nasirhayat028@gmail.com",
        number = '03339495197'
      
        console.log(`The ${this.name} Son of ${this.fName} is this is contact details email: ${email} and number: ${number}`); //this using..
        
    }
}

info.contact()

info.name = "Nasir Hayar"
info.contact()


// +++++++++++++++++++ NOw Arroww Function +++++++++++++++++ 

function information() { // normal way to declare unction ..
    brother = 4
    sisters = 2
    cast = "pukhtoon"

    console.log(`We are ${brother} Brother's ans ${sisters} Sister's`);
}

information()


const information2 = () => {
    brother = 4
    sisters = 2
    cast = pukhtoon
}

console.log(information2);

// one line function...

let addTwoNumbers = (num1, num2) => num1 + num2

console.log(addTwoNumbers(5, 5))
