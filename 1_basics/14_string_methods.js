// ################################# String Methods #################################

let a = "Mubarakh";
let b = " khan ";

console.log(a);

// NOTE:
// Strings are immutable (cannot be changed).
// Most string methods return a NEW string and do NOT modify the original string.
// If you want to save the change, reassign the value.
// Example:
// a = a.toUpperCase();

// Most string methods use () because they are methods.
// But length is a PROPERTY, not a method, so it does NOT use ().

console.log(a.length);          // Total number of characters.

console.log(a.toUpperCase());   // Converts all letters to UPPERCASE.
console.log(a.toLowerCase());   // Converts all letters to lowercase.

console.log(b.trim());          // Removes spaces from both left and right.
console.log(b.trimStart());     // Removes spaces only from the beginning.
console.log(b.trimEnd());       // Removes spaces only from the end.

console.log(b);                 // Original value remains unchanged.


// ================= slice() =================

// Works with indexes (not length).
// Start index is included.
// End index is excluded.
// Returns a new string without changing the original.

console.log(a.slice(0, 2));     // "Mu"


// ================= substring() =================

// Similar to slice().
// Start index is included.
// End index is excluded.
// Difference: substring() does not support negative indexes.

console.log(a.substring(0, 5)); // "Mubar"


// ================= concat() =================

console.log(a.concat(b));       // Joins two or more strings.
// Same as:
console.log(a + b);


// ================= includes() =================

console.log(a.includes("M"));   // true
console.log(a.includes("m"));   // false

// includes() is case-sensitive.


// ================= replace() =================

console.log(b.replace("khan", "shah"));

// replace() replaces ONLY the first matching occurrence.
// It returns a NEW string and does not change the original string.


// ================= startsWith() =================

console.log(a.startsWith("M")); // true
console.log(a.startsWith("m")); // false

// startsWith() is case-sensitive.


// ================= at() =================

console.log(a.at(3));

// Returns the character at the given index.
// Bonus:
// at() also supports negative indexes.
console.log(a.at(-1));          // Last character


// ================= charAt() =================

console.log(a.charAt(3));

// Similar to at()
// Difference:
// charAt() does NOT support negative indexes.


// ================= indexOf() =================

console.log(a.indexOf("h"));

// Returns the first matching index.
// Returns -1 if not found.


// ================= lastIndexOf() =================

console.log(a.lastIndexOf("a"));

// Returns the last occurrence index.


// ================= repeat() =================

console.log(a.repeat(3));

// Repeats the string 3 times.


// ================= padStart() & padEnd() =================

// Useful for formatting values like IDs.

console.log("5".padStart(3, "0")); // 005
console.log("5".padEnd(3, "0"));   // 500


// ================= replaceAll() =================

// Replaces every matching occurrence.

console.log("Ali Ali".replaceAll("Ali", "Ahmed"));


// ================= split() =================

// Converts a string into an array.

console.log("HTML,CSS,JS".split(","));
// ["HTML", "CSS", "JS"]