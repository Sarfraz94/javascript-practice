



/*  Data types has two types
1.Primative: use for single value 
    1)String
    2)Number
    3)boolean
    4)Null 
    5)undefined
    6)Symbol
    7)bigInt

2.Non-primative: use for collections of valuses and by refrence
    1)array
    2)Object
    3)function */




// Primitive Data Types

let myString = "Ali";
let myNumber = 25;
let myBoolean = true;
let myNull = null;
let myUndefined; // or let myUndefined = undefined
let mySymbol = Symbol("id");
let myBigInt = 12345678901234567890n;

// Non-Primitive Data Types

let myArray = ["Apple", "Banana", "Mango"];

let myObject = {
    name: "Ali",
    age: 25
};
let myFunction = function () {
    return "Hello";
};

// typeof

console.log(typeof myString);      // string
console.log(typeof myNumber);      // number
console.log(typeof myBoolean);     // boolean
console.log(typeof myNull);        // object (JavaScript ki purani bug)
console.log(typeof myUndefined);   // undefined
console.log(typeof mySymbol);      // symbol
console.log(typeof myBigInt);      // bigint

console.log(typeof myArray);       // object
console.log(typeof myObject);      // object
console.log(typeof myFunction);    // function