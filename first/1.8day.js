//scope of let, const, var
// scope in IDE is different and in console of browser is different  ****
// learn about window object which very useful

// this
const user={
    userName: "Akash",
    price: 200,
    welcomeMessage: function (){
        console.log(`thankYou ${this.userName}, your total is ${this.price}`)
        console.log(this)    // print many this
    }}

//user.welcomeMessage()
user.userName="kaushalJi"
user.welcomeMessage()

function use(){
    userName:"aaaa",
    console.log(this.userName)   // this method is not work without object
}
use()


//arrow function
const newUser = () => {
    userName= "akash",
    age= 16,
    console.log(userName)
}
newUser()


