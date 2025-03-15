
let name = "Nasir"

let age = 19

console.log(`Hey, it's me ${name} and I'm ${age} years old`);

let point = new String("Nasir-Hayat")

console.log(point);
console.log(point.length);
console.log(point.toLowerCase());
console.log(point.toUpperCase())
console.log(point.charAt(4));
console.log(point.indexOf("H"));

let newString = point.substring(0, 4)
console.log(newString);

let anotherString = point.slice(-11, 2)
console.log(anotherString);

let n = "    Hayat   "

console.log(n);
console.log(n.trim()); //use to avoid unnessary space

let url = "https://nasirdevops.com%20/blog"

console.log(url.replace("%20", "-"));
