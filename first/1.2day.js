//stack for primitive value  //heap for non primitive value
let name = "akash"
let newName = name
console.log(newName)
console.log(name)

//heap
let user1 = {
   userId : 120,
   upiId : 120
}
let user2= user1
console.log(user2.userId)  
//with another object we using same memory location because in same place in heap

// string interpolation
value= "akash"
rollno= 016
console.log(`my name is ${value} and roll no is ${rollno}`) 
 // not a this'   //it  is `

// string is a object
const gamename= new String('akash')
console.log(gamename[1])
console.log(gamename.length)   // there is so many method in string // go to mdn 
console.log(gamename.toUpperCase())

// number is also object  
const num= new Number(200)
console.log(num)   
console.log(num.toString())  //numer also have methods

// math is also object
console.log(Math.min(5,6,3,8))
console.log(Math.random())     //always b/w 0  to 1
console.log(Math.floor(Math.random()*10))

