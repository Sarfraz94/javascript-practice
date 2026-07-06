// two types of data conversions 
// 1. Implicit: convert by javascript
// 2. Explicit: convert forcly by user


// 1 Implicit examples

let plus="5"+2  
console.log(plus+typeof plus) //52 string

let mins="7"-2
console.log(mins+typeof mins)  //5 number

let bol=true+1
console.log(bol+typeof bol)  // 2 number

// 2/Explicit Examples
let score=80

console.log(typeof(score))  //number

let conversion = String(score)
console.log(typeof conversion)  //string

let bool = true
let cool= Number(bool)
console.log(cool+typeof cool)


let num = "123";
let mun=parseInt(num)
console.log(typeof mun);
