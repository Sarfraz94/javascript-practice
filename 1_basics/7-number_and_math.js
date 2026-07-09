/*=====================================================
            NUMBER (JavaScript Notes)
=====================================================*/

// Constructor functions always start with a capital letter.

/*=====================================================
            NUMBER CONSTRUCTOR
=====================================================*/

// Primitive Number
let a = 10;

// Number Constructor (Returns Primitive Number)
let b = Number(10);

// Number Object
let c = new Number(10);

console.log(typeof a); // number
console.log(typeof b); // number
console.log(typeof c); // object

/*=====================================================
            NUMBER CONVERSION
=====================================================*/

// Invalid conversion returns NaN
let name = Number("Ali");
console.log(typeof name, name); // number NaN

// BigInt
let big = BigInt(4);
console.log(typeof big, big); // bigint 4n

/*=====================================================
            parseFloat()
=====================================================*/

// Converts value into floating-point number.
// Trailing zeros (.00) are NOT preserved.

let num = parseFloat(12.00);
console.log(typeof num, num); // number 12

let num1 = parseFloat(12.06);
console.log(typeof num1, num1); // number 12.06

console.log(12 === 12.00); // true

/*=====================================================
            parseInt()
=====================================================*/

// Converts value into integer.
// Removes decimal part.

let num2 = parseInt(12.00);
console.log(typeof num2, num2); // number 12

let num3 = parseInt(12.99);
console.log(typeof num3, num3); // number 12

/*=====================================================
            NUMBER METHODS
=====================================================*/

// toFixed()
// Formats number with fixed decimal places.
// Returns STRING to preserve formatting.
// JavaScript Number does not preserve trailing zeros.

let price = 2.3333;
console.log(price.toFixed(2)); // "2.33"

let whole = 12;
console.log(whole.toFixed(2)); // "12.00"
console.log(typeof whole.toFixed(2)); // string

//-----------------------------------------------------

// toString()
// Converts Number into String.

console.log(price.toString());
console.log(typeof price.toString()); // string

//-----------------------------------------------------

// toPrecision()
// Sets total significant digits.

let value = 55123.45;

console.log(value.toPrecision(5)); // "55123"
console.log(value.toPrecision(2)); // "5.5e+4"

//-----------------------------------------------------

// valueOf()
// Returns primitive value from Number object.

console.log(c.valueOf()); // 10
console.log(typeof c.valueOf()); // number

//-----------------------------------------------------

// toLocaleString()
// Formats number according to local region.

console.log(value.toLocaleString()); // 55,123.45

/*=====================================================
            NUMBER CHECK METHODS
=====================================================*/

// isInteger()

console.log(Number.isInteger(20));     // true
console.log(Number.isInteger(20.5));   // false

//-----------------------------------------------------

// isNaN()
// Checks only NaN value.

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN("Ali"));      // false
console.log(Number.isNaN(100));        // false

//-----------------------------------------------------

// isFinite()
// Checks whether number is finite.

console.log(Number.isFinite(100));        // true
console.log(Number.isFinite(Infinity));   // false
console.log(Number.isFinite(-Infinity));  // false

//-----------------------------------------------------

// Number.parseInt()

console.log(Number.parseInt("123px")); // 123

//-----------------------------------------------------

// Number.parseFloat()

console.log(Number.parseFloat("12.75px")); // 12.75

/*=====================================================
            NUMBER PROPERTIES
=====================================================*/

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

/*=====================================================
            MATH OBJECT
=====================================================*/

// Square Root
console.log(Math.sqrt(25)); // 5

// Power
console.log(Math.pow(2, 3)); // 8

// Minimum Value
console.log(Math.min(3, 4, 7, 9, 6)); // 3

// Maximum Value
console.log(Math.max(3, 4, 7, 9, 6)); // 9

// Absolute Value
console.log(Math.abs(-10)); // 10

// Random Number (0 <= value < 1)
console.log(Math.random());

/*=====================================================
            ROUNDING METHODS
=====================================================*/

// Positive Numbers

console.log(Math.floor(3.8)); // 3
console.log(Math.ceil(3.1));  // 4
console.log(Math.round(3.5)); // 4
console.log(Math.trunc(3.9)); // 3

//-----------------------------------------------------

// Negative Numbers

console.log(Math.floor(-3.8)); // -4
console.log(Math.ceil(-3.8));  // -3
console.log(Math.round(-3.8)); // -4
console.log(Math.trunc(-3.8)); // -3