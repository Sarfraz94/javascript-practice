/* let colores=["green","blue","orange","white","yellow"]
let subjects=["Sindhi","English","urdu","Biology","math","physics"]
let games=["footbal","cricket","hokey","ridign","hunting"]

console.log(typeof colores,typeof subjects, typeof games)  */

// @Sarfraz94 ➜ /workspaces/javascript-practice (main) $ node 1_basics/16_arrary_practice.js 
// object object object

// ========================================================
/*
let cities=["karachi","lahore","islamabad","hyderabad","queta"]

console.log(cities[0])  //karachi
console.log(cities[2])  //islamabad
console.log(cities[cities.length-1]) //queta
console.log(cities[10]) //undefined
console.log(cities[-1])  //undefied */

// note: there is index but not value give this show undefinde
//       normal array not follow negative index 

// ===========================================
/*
let fruit=["apple","mango","orange"]
fruit[1]="banana"
console.log(fruit)

let marks=[40,50,60]
marks[marks.length-1]=100
console.log(marks)

let cities=["karachi","lahore","islamabad"]
cities[0]="hyderabd"
cities[2]="quetta"
console.log(cities)


let checking=[10,20]
checking[5]=100
console.log(checking,checking.length) */

/* @Sarfraz94 ➜ /workspaces/javascript-practice (main) $ node 1_basics/16_arrary_practice.js 
[ 'apple', 'banana', 'orange' ]
[ 40, 50, 100 ]
[ 'hyderabd', 'lahore', 'quetta' ]
[ 10, 20, <3 empty items>, 100 ] 6   */
/*
let fruit=["apple","mango","orange","banana"]
console.log(fruit.length)
console.log(fruit.length-1) //index formula
fruit.length=2
console.log(fruit)
fruit.length=0
console.log(fruit)  */

// ======================================
let fruit=["apple","mango"]
fruit.push("orange")
console.log(fruit)

let num=[10,20]
num.push(30,40,50)
console.log(num)

let colors=[]
colors.push("red","green","blue")
console.log(colors)

let cities=["Karachi"]
let result=cities.push("lahore")

console.log(result, cities)
console.log(cities.push("larkana"))