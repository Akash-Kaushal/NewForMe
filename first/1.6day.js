//object with nested function
const user = {
        fullname: {
        firstname: "akash",
        lastname: "kaushal"
        }
}
//console.log(user.fullname)
//console.log(user.fullname.firstname)

// destructuring of object
const newUser= {
    name: "akash",
    course:"javascript",
    time : "1/1/2026"
}

//for replacement of    newUser.course
const{course} = newUser
const {course: c} = newUser   // we can also rename the variable for calling
console.log(course)
console.log(c)
