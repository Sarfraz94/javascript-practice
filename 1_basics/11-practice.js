// ============================================
// JavaScript Built-in Browser Functions
// ============================================

// JavaScript provides some built-in browser functions
// to display output and take input from the user.


// ============================================
// alert()
// ============================================

// Displays a popup message in the browser.

// alert() does NOT return any useful value.
// It always returns undefined,
// so storing it in a variable has no practical use.

alert("Welcome to the website");

// Example

let result = alert("Hello");

console.log(result); // undefined


// ============================================
// prompt()
// ============================================

// Takes input from the user at runtime.

// By default, prompt() always returns a STRING.

let username = prompt("Enter your name");

// Convert the input into Number

let age = +prompt("Enter your age");

// OR

let pin = Number(prompt("Enter your PIN"));


// ============================================
// confirm()
// ============================================

// Displays a confirmation dialog.

// OK     -> true
// Cancel -> false

let choice = confirm("Would you like more videos?");

console.log(choice);


// ============================================
// Console Methods
// ============================================


// ============================================
// console.log()
// ============================================

// Displays output in the browser console.

// Mostly used for debugging and checking values.

console.log("Hello JavaScript");


// ============================================
// console.table()
// ============================================

// Displays data in a table format.

// Without console.table(), we have to print
// each variable separately using console.log().

let name = "Ali";
let age2 = 20;
let city = "Karachi";

// Without console.table()

console.log(name);
console.log(age2);
console.log(city);

// Better way

console.table({ name, age: age2, city });


// ============================================
// console.warn()
// ============================================

// Displays a warning message.

console.warn("Please submit your assignment.");


// ============================================
// console.error()
// ============================================

// Displays an error message.

console.error("Something went wrong.");


// ============================================
// console.info()
// ============================================

// Similar to console.log().

// Used to display informational messages.

console.info("User logged in successfully.");


// ============================================
// Semicolon (;)
// ============================================

// A semicolon (;) marks the end of a statement.

// It is required when writing multiple statements
// on the same line.

let a = 10; let b = 20; console.log(a + b);

// JavaScript can automatically insert semicolons (ASI),
// but using them is considered a good practice
// because it helps avoid unexpected errors.


// ============================================
// Explore Console Object
// ============================================

// Displays all available console methods.

console.log(console);