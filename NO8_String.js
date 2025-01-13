/*
Here is a list of important String Functions in javascript that should lean to handle
string manipulations effectively

*/

// 1.length | Returns the length of string.

let str="Hello World";
console.log('length of string is',str.length)

// 2.toUpperCase() and toLowerCase() | Convert a string to uppercase or lowercase.

console.log(`${"hello".toUpperCase()}`);
console.log(`${"WOrld".toLowerCase()}`);

// 3. includes() | Checks if a substring is present in a string (case-sensitive)

let textLine="JavaScript is amazing";
console.log(textLine.includes('Script')); // true
console.log(textLine.includes('script')); // false


// 4.indexOf() and lastIndexOf() | Find the first or last index of ocurrence of a substring in a string.

textLine="JavaScript is fun!";
console.log(textLine.indexOf("i")) // 7
console.log(textLine.lastIndexOf("i")) // 11


// 5.startsWith() and endsWith() | check if a string starts or ends with a specific substring

textLine="Hello, Word!";
console.log(textLine.startsWith("Hello"))
console.log(textLine.endsWith("d!"))

// 6.slice() | extracts a portion of a string from the start and end indices.


textLine="JavaScript";
console.log(textLine.slice(0,4)) //Java
console.log(textLine.slice(-6)) //Script


//7. substring() | similar to slice() , but does not accept negative indices.

console.log(textLine.substring(0,4)); // Java

/// 8.substr() (Deprecated) | extracts a substring index and length.

console.log(textLine.substring(0,4)); // Java

// 9. replace() and replaceAll() | Replace parts of a string with another string.

let textStr = "I like apples. Apples are sweet.";
console.log(textStr.replace("apples", "oranges")); // Output: "I like oranges. Apples are sweet."
console.log(textStr.replaceAll("Apples", "oranges")); // Output: "I like apples. oranges are sweet."

// 10.split() | Splits a string into an array of substrings based on a delimiter.

let textstr = "a,b,c";
console.log(textstr.split(",")); // Output: ["a", "b", "c"]

/// 11. trim(), trimStart(), and trimEnd() | Remove whitespace from both ends, the start, or the end of a string.
textstr = "   Hello World!   ";
console.log(textstr.trim()); // Output: "Hello World!"
console.log(textstr.trimStart()); // Output: "Hello World!   "
console.log(textstr.trimEnd());   // Output: "   Hello World!"

/// 12. charAt() and charCodeAt() | Get a character at a specific index or its Unicode value.


textstr = "JavaScript";
console.log(textstr.charAt(4));    // Output: "S"
console.log(textstr.charCodeAt(4)); // Output: 83


/// 13. concat() | Concatenates two or more strings.



let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // Output: "Hello, World!"

///  14. repeat() | Repeats a string a given number of times.

let ha = "ha";
console.log(ha.repeat(3)); // Output: "hahaha"

/// 15. toString() | Converts a value to a string.


let num = 123;
console.log(num.toString()); // Output: "123"
