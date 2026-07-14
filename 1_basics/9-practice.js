// ############################################
// Variable Naming Rules
// ############################################

// Variable names are case-sensitive.

let name = "Sarfraz";
let Name = "Ali";

console.log(name + " " + Name); // Sarfraz Ali

// ✅ Valid Variable Names
let _name = "Ali";
let $name = "Khan";
let name1 = "Juman";

// ❌ Invalid Variable Names

// let @name = "Ali";      // Special characters are not allowed except $ and _
// let last-name = "Ali";  // Hyphen (-) is not allowed
// let 1name = "Ali";      // Variable cannot start with a number



// ############################################
// var vs let vs const
// ############################################

// 1. var
// ✔ Can be reassigned
// ✔ Can be redeclared
// ✔ Function Scoped

var user = "Ali";
user = "Fakir";      // Reassign
var user = "Babal";  // Redeclare

function demoVar() {
    if (true) {
        var user = "Soomro";
        console.log(user); // Soomro
    }

    console.log(user); // Soomro
}

demoVar();
console.log(user); // Babal



// --------------------------------------------
// 2. let
// --------------------------------------------

// ✔ Can be reassigned
// ❌ Cannot be redeclared
// ✔ Block Scoped

let student = "Ali";
student = "Sarfraz";

// let student = "Rahib"; // Error

function demoLet() {
    if (true) {
        let student = "Soomro";
        console.log(student); // Soomro
    }

    console.log(student); // Sarfraz
}

demoLet();
console.log(student); // Sarfraz



// --------------------------------------------
// 3. const
// --------------------------------------------

// ❌ Cannot be reassigned
// ❌ Cannot be redeclared
// ✔ Block Scoped

const city = "Ratodero";

// city = "Larkana"; // Error

function demoConst() {

    if (true) {
        const city = "Karachi";
        console.log(city); // Karachi
    }

    console.log(city); // Ratodero
}

demoConst();


// const country; // Error
const country = undefined; // Valid



// ############################################
// JavaScript Data Types
// ############################################

// JavaScript has two categories of data types.

// 1. Primitive
// 2. Non-Primitive



// ============================================
// Primitive Data Types
// ============================================

// 1. String
// Stores text inside "" or ''

let str = "Hello";


// 2. Number
// Stores integers and decimal numbers.

let num = 100;
let price = 99.99;


// 3. Boolean

let isLogin = true;


// 4. Null
// Represents an intentional empty value.

let value = null;


// 5. Undefined
// Variable declared but no value assigned.

let age;


// 6. BigInt
// Used for very large integers.

let big = 999999999999999999999n;


// 7. Symbol
// Creates unique property keys.

let id = Symbol("id");



// ############################################
// Number vs BigInt
// ############################################

console.log(Number.MAX_SAFE_INTEGER);

// Use BigInt if integer exceeds MAX_SAFE_INTEGER.

console.log(10n + BigInt(10)); // 20n

// BigInt does not support decimal values.



// ############################################
// null vs undefined
// ############################################

// ---------- null ----------

console.log(null < 0);   // false
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null <= 0);  // true
console.log(null >= 0);  // true

/*
Important:

During comparison (< > <= >=)

null → 0

But with ==

null is NOT converted into 0.

null == undefined → true
null == 0 → false
*/


// ---------- undefined ----------

console.log(undefined < 0);   // false
console.log(undefined > 0);   // false
console.log(undefined == 0);  // false
console.log(undefined <= 0);  // false
console.log(undefined >= 0);  // false

/*
During comparison

undefined → NaN

NaN cannot be compared with any number.

That's why every comparison returns false.
*/


console.log(undefined == null); // true

/*
Loose Equality (==)

null == undefined

is true because JavaScript has a special rule for them.
*/


// Remember

// null
// → Intentional empty value.
// → In comparisons it becomes 0.

// undefined
// → Variable declared but value not assigned.
// → In comparisons it becomes NaN.



// ############################################
// Non-Primitive Data Types
// ############################################

// 1. Array
// 2. Object
// 3. Function


// Array
// Stores multiple values.
// Heterogeneous (can store different data types).

let arr = [10, "Ali", true];

console.log(typeof arr);          // object
console.log(Array.isArray(arr));  // true



// Object

let person = {
    name: "Ali",
    age: 22
};

console.log(typeof person); // object



// Function

function greet() {
    console.log("Hello");
}

console.log(typeof greet); // function