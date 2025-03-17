//Arrays

let myArr = [9, 8, 7, 6, 5, 4, 3]

console.log(myArr);

let arr2 = new Array(0,1,2,3,4)
console.log(arr2);

//Methodss

myArr.push(2) // adding data to array
console.log(`after push the Array is:  ${myArr}`);

myArr.pop() //removing value from last
console.log(`after pop the Array is:  ${myArr}`);

myArr.unshift(10) // adding data in start of array
console.log(`we added 10 in arr: ${myArr}`);

myArr.shift() //deleted the first value from array
console.log(myArr);

let newArr = myArr.join() //change the type alsoo

console.log( typeof newArr);
console.log( typeof myArr);

//slice and splice

console.log(myArr);

let myn1 = myArr.slice(1, 3)
console.log("A ", myArr);
console.log(myn1);

let myn2 = myArr.splice(1, 3) // Splice operation manipulate the original array
console.log("B ", myArr);
console.log(myn2);


