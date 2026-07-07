
console.log("Sarfraz Ali")
console.log("Sarfraz Ali"+32)  //use of concetination, same combine no any space add between result Sarfraz Ali32
console.log("Sarfraz Ali",32)  // result Sarfraz Ali 32

// + → Values ko jod kar ek nayi string banata hai.
// , → Sirf console.log() mein alag-alag values ko display karta hai; unhe join nahi karta.



let name="Ali"
let lastName="khan"
let age=22
console.log("This is a "+name+lastName+"that age is:"+age)  //res:This is a Alikhanthat age is:22

// + concetination is not professional may be messy so professional is use templete literal(backtick)

console.log(`Thsi is a ${name} ${lastName} that age is:${age}`) //res:Thsi is a Ali khan that age is:22

let mytring="My string"   //typeof  string
let mytring1= new String("My String")  //typeof object
console.log(typeof mytring)
console.log(typeof mytring1)


let strMethods="Sarfraz"

console.log(strMethods.length) 

console.log(strMethods.toUpperCase())  //tempory it upper case not original
console.log(strMethods) //res:Sarfraz

//but want to save permontaly give varible where store
let strMethod = strMethods.toUpperCase()
console.log(strMethod)

console.log(mytring1.toLowerCase()) //using object of string

let tr="  dosto    "
console.log(tr.trim())
console.log(mytring.includes("My"))  // it check also cases of text my false and My true
console.log(mytring.startsWith("M"))
let me="this is first time"
console.log(me.slice(0,4))  //using index this
console.log(me.slice(-6))  //also use negative sign to acces it mean give last 6 characters
let text = " JavaScript";
console.log(text.substring(1, 5)); //same as slice 
 let xt = "I like tea";
 console.log(xt.replace("tea", "coffee"));

let tet = "Ali,Ahmed,Usman";
console.log(tet.split(","));
let ex = "Ali Ahmed Usman";

// charAt(index valuse) and at(index value)
//repeat 
//padStart and padEnd which add text before and after