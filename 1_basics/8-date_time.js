/*=====================================================
            DATE OBJECT
=====================================================*/

// Date is a built-in JavaScript object.
// Use 'new Date()' to create a Date object.

/*=====================================================
            CREATE DATE OBJECT
=====================================================*/

// Current Date & Time

let currentDate = new Date();

console.log(currentDate);

//-----------------------------------------------------

// Custom Date
// Syntax:
// new Date(year, monthIndex, day)

// NOTE:
// Month index starts from 0.
// 0 = January
// 1 = February
// ...
// 11 = December

let birthDay = new Date(2004, 1, 5);

console.log(birthDay);

/*=====================================================
            GET METHODS
=====================================================*/

// getFullYear()
// Returns full year.

console.log(birthDay.getFullYear()); // 2004

//-----------------------------------------------------

// getMonth()
// Returns month index (0-11).
// Add +1 if you need the actual month number.

console.log(birthDay.getMonth()); // 1 (February)
console.log(birthDay.getMonth() + 1); // 2

//-----------------------------------------------------

// getDate()
// Returns day of month.

console.log(birthDay.getDate()); // 5

//-----------------------------------------------------

// getDay()
// Returns day of week.
// 0 = Sunday
// 1 = Monday
// ...
// 6 = Saturday

console.log(birthDay.getDay());

//-----------------------------------------------------

// getHours()

console.log(currentDate.getHours());

//-----------------------------------------------------

// getMinutes()

console.log(currentDate.getMinutes());

//-----------------------------------------------------

// getSeconds()

console.log(currentDate.getSeconds());

//-----------------------------------------------------

// getMilliseconds()

console.log(currentDate.getMilliseconds());

/*=====================================================
            TIMESTAMP
=====================================================*/

// Date.now()
// Returns current timestamp in milliseconds.

console.log(Date.now());

/*=====================================================
            INTERVIEW NOTES
=====================================================*/

// ✔ Date is an Object.
// ✔ Always create Date using new Date().
// ✔ Month starts from 0.
// ✔ getMonth() returns 0-11.
// ✔ getDay() returns weekday (0-6).
// ✔ getDate() returns day of month (1-31).
// ✔ Date.now() returns milliseconds since Jan 1, 1970.