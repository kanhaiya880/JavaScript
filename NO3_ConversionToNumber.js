//data type in js

/// Primitive
// 7 types: String , Number, Boolean, null, undefined, Symbol


// Reference (non-primitive)
// Array,Object,Symbol



//Conversion of values to Number

let a="34"
console.log("\nActual type:",typeof a,a,"\nAfter:", typeof(a=Number(a)),a);
a=34
console.log("\nActual type:",typeof a,a,"\nAfter:", typeof(a=Number(a)),a);
a="34cc"
console.log("\nActual type:",typeof a,a,"\nAfter:", typeof(a=Number(a)),a);
a=false
console.log("\nActual type:",typeof a,a,"\nAfter:", typeof(a=Number(a)),a);
a=''
console.log("\nActual type:",typeof a,a,"\nAfter:", typeof(a=Number(a)),a);
a=6.6
console.log("\nActual type:",typeof a,a,"\nAfter:", typeof(a=Number(a)),a);
a=null
console.log("\nActual type:",typeof a,a,"\nAfter:", typeof(a=Number(a)),a);
a=undefined
console.log("\nActual type:",typeof a,a,"\nAfter:", typeof(a=Number(a)),a);
