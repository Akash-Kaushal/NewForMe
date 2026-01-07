// array is also object
// array have shallow copy 
const MyArray = [1,2,3]
const myarr = new Array(1,2,3)
console.log(myarr[1])
MyArray.unshift(9)
console.log(MyArray)
let newArray = MyArray.join()
console.log(newArray)         // array to string
