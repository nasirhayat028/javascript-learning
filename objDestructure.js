
let course = {
    cName: "Algebra",
    cInstructor: "Jawad Ali",
    cPrice: "1199",
}

console.log(`This is actually very large process or we can say it's not destructured:  ${course.cName}`);


const {cName} = course

console.log(`After De-Structured ${cName}`);

const {cInstructor: teacher} = course //  from this method we can give unique name also to access more tomorrow

console.log(teacher);
