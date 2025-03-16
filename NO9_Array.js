/// Array In Javascript
// type of array is object

let array=[10,20,30,40] /// Array Declaration 
array=["Alen Turing",100,0xface,true] // we can store hetorgineou values also

let constructorArray= new Array(90,80,70,60)
console.log(` constructor array: `+constructorArray+" type of array "+(typeof constructorArray));


// at()

console.log(array.at(1)) /// we can  pass index output:100

// toReversed()

console.log(array.toReversed()) // to reverse the array ///[ true, 64206, 100, 'Alen Turing' ]

// concat()

let x=[1,2,3,4],y=[4,5,6,5]
console.log(x.concat(y)); //[1, 2, 3, 4,4, 5, 6, 5]

// Experiment : what will happen if we concat two array using + operator

z=x+y
console.log(`z : ${z} type: ${typeof z}`) /// z : 1,2,3,44,5,6,5 type: string

// pop and push
array.push(500)
console.log(`push 500 => ${array}`);
array.pop()
console.log(`pop 500 => ${array}`);

/// sort()
// console.log(array)
// console.log(array.sort())
// console.log(array)
