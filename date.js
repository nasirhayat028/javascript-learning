let date = new Date()

console.log(date);

console.log(date.toString());  // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

console.log(date.toDateString());  // Tue May 12 2020

console.log(date.toTimeString());  // 18:50:21 GMT-0500 (Central Daylight Time)

console.log(date[Symbol.toPrimitive]("string")); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)


let creatMyDate  = new Date(2025, 1, 20)
console.log(creatMyDate);
console.log(creatMyDate.toString());

let todayDate = new Date()
console.log(todayDate.toString());
console.log(todayDate.getDay());


