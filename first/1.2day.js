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