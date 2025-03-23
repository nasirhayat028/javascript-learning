let n = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let num = n.map( (nn) => nn)
console.log(num);


// Now add Two to each and Every Value 

let num2 = n.map( (nn) => nn + 2)
console.log(`Ater addition of two: ${num2}`);

// we can use two map at once also like...

let num3 = n
.map((nnn)=> nnn *100)
.map((nnn) => nnn+1)
.filter((nnn) => nnn > 300) // it will filter all those values which is above 300

console.log(num3);

// ...................................

// Reduce...... 

myNum = [1, 2, 3, ]

// const sum = myNum.reduce((acc, curr) => acc + curr, 0) // 0 is the initial value of acc

const sum = myNum.reduce( function sun(accumulator, current) {
    console.log(`accumulstor: ${accumulator} current: ${current}`);
    
    return accumulator + current
}, 0)
console.log(sum);

const sum2 = myNum.reduce((acc, curr) => acc+curr , 0) // by arrow fun.....
console.log(sum2);