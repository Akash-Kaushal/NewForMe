//const user= new Object()  <-----it is treated as singleton object

//object literals

let user = {
 name: "akash",
 "fullName":"Akash Kaushal",
 age: 18,
 email: "akaash@chat.com",
 logIn: ["sunday", "tuesday"]
}

console.log(user.name)
console.log(user.age)
console.log(user["email"])
console.log(user["fullName"])

user.email = "kaushal@google.com"     // change value of variable of object
    //    user.freeze                           // freeze a data of object
user.age= 20
 

//function in object
user.greeting = function() {                    //for adding greeting
    console.log(`hello user ${this.name}`)     // this is used for calling in same object
}

console.log(user.greeting())