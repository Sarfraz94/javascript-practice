// ##########################################################################
// JavaScript Date Object
// ##########################################################################

// Date Object is a built-in JavaScript object.
// It is used to create, store, read, format and manipulate date & time.
//
// Real World Uses:
// ✔ Digital Clock
// ✔ Calendar
// ✔ Age Calculator
// ✔ Booking System
// ✔ Attendance System
// ✔ Expiry Date
// ✔ Countdown Timer
// ✔ Order Date & Time



// ##########################################################################
// 1) Create Date Object
// ##########################################################################

// ---------------- Current Date & Time ----------------

// new Date() returns the current date and current time.

let todayFull = new Date();
console.log(todayFull);

// Example Output:
// Thu Jul 16 2026 13:06:30 GMT+0500 (Pakistan Standard Time)



// ---------------- Create Your Own Date ----------------

// There are two common ways to create your own date.


// ======================================================
// Method 1 : Using String
// ======================================================

// Rules:
//
// ✔ If using "-" or "/" the date MUST be inside double quotes.
//
// Recommended ISO Format
// YYYY-MM-DD   
// Also Supported
// MM-DD-YYYY

//
// Note:
// "YYYY-MM-DD" is the safest and recommended format.

let myBirthday = new Date("2004-02-05");
console.log(myBirthday);

let myBirthday1 = new Date("02-05-2004");
console.log(myBirthday1);

let myBirthday2 = new Date("02/05/2004");
console.log(myBirthday2);



// ======================================================
// Method 2 : Using Numbers
// ======================================================

// No quotation marks.
//
// Syntax:
//
// new Date(year, month, day, hour, minute, second, millisecond)
//
// Important Rule:
//
// Month starts from 0.
//
// 0 = January
// 1 = February
// 2 = March
// ...
// 11 = December

let myBirthday3 = new Date(2004, 1, 5);
console.log(myBirthday3);

let myBirthday4 = new Date(2004, 1, 5, 5);
console.log(myBirthday4);

// Above means:
//
// Year = 2004
// Month = February
// Day = 5
// Hour = 5
//
// Minutes, Seconds and Milliseconds become 0 automatically.



// ##########################################################################
// 2) Date Formatting Methods
// ##########################################################################

// These methods convert the Date Object into different readable formats.

console.log(todayFull.toDateString());  //only date give not time
console.log(todayFull.toTimeString());  //only give time not date 
console.log(todayFull.toLocaleDateString());  //7/16/2026
console.log(todayFull.toLocaleTimeString()); //5:21:50 PM
console.log(todayFull.toISOString());
console.log(todayFull.toString());



// ##########################################################################
// 3) Get Methods
// ##########################################################################

// Used to read or extract values from a Date Object.

console.log(todayFull.getFullYear());

console.log(todayFull.getMonth());
// January = 0

console.log(todayFull.getMonth() + 1);
// Human-readable month

console.log(todayFull.getDate());

console.log(todayFull.getDay());
// Sunday = 0
// Monday = 1
// ...
// Saturday = 6

console.log(todayFull.getHours());
console.log(todayFull.getMinutes());
console.log(todayFull.getSeconds());



// ##########################################################################
// 4) Set Methods
// ##########################################################################

// Used to modify or update a Date Object.

todayFull.setFullYear(2027);

console.log(todayFull);

// IMPORTANT:
//
// set methods return milliseconds (Timestamp)
//
// Example:
//
// console.log(todayFull.setFullYear(2027));
//
// Output:
// 1815729158000
//
// Because setFullYear() returns a Number (Timestamp),
// not the Date Object.

console.log(todayFull.setFullYear(2027));



// ##########################################################################
// 5) Date.now()
// ##########################################################################

// Date.now() returns the current timestamp.
//
// Timestamp means:
// Total milliseconds passed since
// 1 January 1970 (Unix Epoch).

let dateNow = Date.now();

console.log(dateNow);



let timeStamp = Date.now();

let date = new Date(timeStamp);

console.log(date);



// ##########################################################################
// Most Common Date Methods
// ##########################################################################

/*

Create Date
-----------
new Date()

Formatting
----------
toString()
toDateString()
toTimeString()
toLocaleDateString()
toLocaleTimeString()
toISOString()

Get Methods
-----------
getFullYear()
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()
getMilliseconds()

Set Methods
-----------
setFullYear()
setMonth()
setDate()
setHours()
setMinutes()
setSeconds()
setMilliseconds()

Static Method
-------------
Date.now()

*/