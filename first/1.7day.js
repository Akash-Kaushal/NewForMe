function User(){
    console.log("akash")
}
User             //it is only reference
//User()          // function call

function add(num1=6,num2=8){
    //console.log(num1+num2)    //give 35

    return(num1 +num2)        // return doesn't mean print output
    
    console.log("akash")   //after return of function not any line will work
}
add(3,"5")             //function think like 3 is also a string
console.log(add)       //look this line it is not printing
console.log(add(2,"4")) 
console.log(add())       // it give default value sum 6+8

// if number of parameter is not fixed   //use REST OPERATOR
function addProduct(...price){
// for (i=0;1;i++) {  
//   price[i] += price[i] ;           //not working
//}
    
    total = price
    console.log(total)   //retun array 
}

addProduct(2,3,4,6,)

// passing object in function
const user = {
    userName :"akash" ,
    idNumber : 20
}

function takeObject(anyobject) {
    console.log(`username is ${anyobject.userName} , ID is ${anyobject.idNumber}`)
}

takeObject(user)