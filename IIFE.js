// Immediately Invoked Function Expressions IIFE 


(function chai() {
    console.log('Chai is our fvrt...');
    
}) (); // this mean that mostly mentioned global variable to run fun like in this code is chai is make polution in programs so for avoiding polution we write () to run our program..

( (name) => {
    console.log(`Hi, I'm ${name}`);
    
}) ('Nasir Hayat')