// ============================================================================
//                      JAVASCRIPT NUMBER & MATH NOTES
// ============================================================================
// Author : Sarfraz Ali
// Topic  : Number Methods & Math Object
// ============================================================================



// ###########################################################################
//                           NUMBER VARIABLE METHODS
// ###########################################################################
// These methods are used directly with Number variables.
// NOTE:
// ✔ Original variable never changes (Numbers are immutable).
// ✔ Most methods return a NEW value.
// ✔ These 4 methods always return STRING.
//
// Order for Revision:
// 1. toString()
// 2. toFixed()
// 3. toLocaleString()
// 4. toPrecision()
// ###########################################################################

let a = 37555;
let b = 94.3333;


// ---------------------------------------------------------------------------
// 1. toString()
// Convert Number → String
// Return Type : String
// ---------------------------------------------------------------------------

console.log(a.toString());
console.log(typeof a.toString());


// ---------------------------------------------------------------------------
// 2. toFixed()
// Fix decimal places and rounds the number.
// Return Type : String
//
// Example:
// 94.3333 → "94.33"
// 94      → "94.00"
// ---------------------------------------------------------------------------

console.log(b.toFixed(2));
console.log(typeof b.toFixed(2));


// ---------------------------------------------------------------------------
// 3. toLocaleString()
// Display number according to country format.
// Return Type : String
//
// Example:
// 37555 → "37,555"
// ---------------------------------------------------------------------------

console.log(a.toLocaleString());


// ---------------------------------------------------------------------------
// 4. toPrecision()
// Set total significant digits.
// Large numbers may appear in scientific notation.
// Return Type : String
// ---------------------------------------------------------------------------

console.log(a.toPrecision(2));



// ###########################################################################
//                               IMPORTANT NOTE
// ###########################################################################
//
// These 4 methods ALWAYS return STRING.
//
// ✔ toString()
// ✔ toFixed()
// ✔ toLocaleString()
// ✔ toPrecision()
//
// ###########################################################################





// ###########################################################################
//                          NUMBER KEYWORD METHODS
// ###########################################################################
// These methods belong to Number object.
//
// Syntax:
//
// Number.method()
//
// Most of these return Number or Boolean.
// ###########################################################################


// ---------------------------------------------------------------------------
// parseInt()
// Remove decimal part.
// Return Type : Number
// ---------------------------------------------------------------------------

console.log(Number.parseInt(b));

// Same as

console.log(parseInt(b));


// ---------------------------------------------------------------------------
// parseFloat()
// Keep decimal number.
// Return Type : Number
// ---------------------------------------------------------------------------

console.log(Number.parseFloat(b));


// ---------------------------------------------------------------------------
// isNaN()
// Check whether value is NaN.
// Return Type : Boolean
// ---------------------------------------------------------------------------

console.log(Number.isNaN(a));


// ---------------------------------------------------------------------------
// isFinite()
// Check finite or Infinity.
// Return Type : Boolean
// ---------------------------------------------------------------------------

console.log(Number.isFinite(a));


// ---------------------------------------------------------------------------
// isInteger()
// Check integer or not.
// Return Type : Boolean
// ---------------------------------------------------------------------------

console.log(Number.isInteger(a));


// ---------------------------------------------------------------------------
// isSafeInteger()
// Check safe integer range.
// Return Type : Boolean
// ---------------------------------------------------------------------------

console.log(Number.isSafeInteger(a));




// ###########################################################################
//                             NUMBER CONSTANTS
// ###########################################################################
// These are CONSTANT values.
//
// NOTE:
// ✔ They DO NOT use () Parentheses.
// ###########################################################################

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.POSITIVE_INFINITY);

console.log(Number.NEGATIVE_INFINITY);

console.log(Number.NaN);




// ###########################################################################
//                            COMBINED EXAMPLE
// ###########################################################################
//
// Step 1
// 94.3333
// ↓
// toFixed(2)
// ↓
// "94.33"      (String)
//
// Step 2
// parseFloat()
// ↓
// 94.33        (Number)
// ###########################################################################

console.log(Number.parseFloat(b.toFixed(2)));




// ###########################################################################
//                               QUICK REVISION
// ###########################################################################
//
// Number Variable Methods
//
// ✔ toString()
// ✔ toFixed()
// ✔ toLocaleString()
// ✔ toPrecision()
//
// Return Type → STRING
//
// --------------------------------
//
// Number Keyword Methods
//
// ✔ parseInt()
// ✔ parseFloat()
// ✔ isNaN()
// ✔ isFinite()
// ✔ isInteger()
// ✔ isSafeInteger()
//
// Return Type → Number / Boolean
//
// --------------------------------
//
// Number Constants
//
// ✔ MAX_VALUE
// ✔ MIN_VALUE
// ✔ MAX_SAFE_INTEGER
// ✔ MIN_SAFE_INTEGER
// ✔ POSITIVE_INFINITY
// ✔ NEGATIVE_INFINITY
// ✔ NaN
//
// ###########################################################################







// ###########################################################################
//                                MATH OBJECT
// ###########################################################################
//
// Math is a built-in JavaScript object.
//
// Syntax:
//
// Math.method()
//
// ###########################################################################

let x = 5;
let y = 49;
let z = -4;
let n = 49.8;



// ---------------------------------------------------------------------------
// abs()
// Absolute Value
// Negative → Positive
// ---------------------------------------------------------------------------

console.log(Math.abs(z));



// ---------------------------------------------------------------------------
// pow()
// Power
//
// Same as **
// ---------------------------------------------------------------------------

console.log(Math.pow(y,2));



// ---------------------------------------------------------------------------
// sqrt()
// Square Root
//
// Negative Number → NaN
// ---------------------------------------------------------------------------

console.log(Math.sqrt(y));



// ---------------------------------------------------------------------------
// min()
// Smallest Value
// ---------------------------------------------------------------------------

console.log(Math.min(2,4,6,8));



// ---------------------------------------------------------------------------
// max()
// Largest Value
// ---------------------------------------------------------------------------

console.log(Math.max(2,4,6,8));



// ---------------------------------------------------------------------------
// round()
// Round normally.
//
// Decimal >= .5 → Up
// Decimal <  .5 → Down
// ---------------------------------------------------------------------------

console.log(Math.round(n));



// ---------------------------------------------------------------------------
// trunc()
// Remove decimal part.
// ---------------------------------------------------------------------------

console.log(Math.trunc(n));



// ---------------------------------------------------------------------------
// floor()
// Always goes DOWN.
//
// Positive
// 3.8 → 3
//
// Negative
// -3.8 → -4
// ---------------------------------------------------------------------------

console.log(Math.floor(n));



// ---------------------------------------------------------------------------
// ceil()
// Always goes UP.
//
// Positive
// 3.2 → 4
//
// Negative
// -3.8 → -3
// ---------------------------------------------------------------------------

console.log(Math.ceil(n));



// ---------------------------------------------------------------------------
// random()
// Random number between
//
// 0 <= value < 1
// ---------------------------------------------------------------------------

console.log(Math.random());



// ---------------------------------------------------------------------------
// PI
//
// Constant
//
// Does NOT use ()
// ---------------------------------------------------------------------------

console.log(Math.PI);




// ###########################################################################
//                  trunc() vs floor() vs ceil() vs round()
// ###########################################################################
//
// POSITIVE
//
// Value = 3.8
//
// trunc() → 3
// floor() → 3
// ceil()  → 4
// round() → 4
//
// ----------------------------------------
//
// NEGATIVE
//
// Value = -3.8
//
// trunc() → -3
// floor() → -4
// ceil()  → -3
// round() → -4
//
// ----------------------------------------
//
// Number Line
//
// ---- -4 ------ -3 ------ -2 ------ -1 ------ 0 ------ 1 ------ 2 ------
//
// floor()  → Always LEFT
// ceil()   → Always RIGHT
// trunc()  → Remove decimal only
// round()  → Normal rounding
//
// ###########################################################################







// ###########################################################################
//                             FINAL MEMORY TREE
// ###########################################################################
//
// Number Variable Methods
//
// toString()
// toFixed()
// toLocaleString()
// toPrecision()
//
// ↓
//
// Number Keyword Methods
//
// parseInt()
// parseFloat()
// isNaN()
// isFinite()
// isInteger()
// isSafeInteger()
//
// ↓
//
// Number Constants
//
// MAX_VALUE
// MIN_VALUE
// MAX_SAFE_INTEGER
// MIN_SAFE_INTEGER
// POSITIVE_INFINITY
// NEGATIVE_INFINITY
// NaN
//
// ↓
//
// Math Object
//
// abs()
// pow()
// sqrt()
// min()
// max()
// round()
// trunc()
// floor()
// ceil()
// random()
// PI
//
// ###########################################################################