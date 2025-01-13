
/// symbol create unique symbol type id
let id=Symbol("123")
let anotherId=Symbol("123")
console.log(id==anotherId);

id=Symbol(123)
anotherId=Symbol(123)
console.log(id==anotherId);
console.log(typeof id) ///gives type symbol



//new data type big int
const bigNumber=874983798379843984n
console.log( typeof bigNumber); ///gives type bigint

///array
let array =[1,2,3,4,5,6,7]
console.log(typeof array); ///gives type object

let myobj={
    1:"kanhaiya",
    2:"alen",
    3:"Robort",
    4:"Rossum"
}
console.log(typeof myobj);  /// gives type object


// function
const myFun=function(){
    console.log("Hello World");
    
}
console.log(typeof myFun); //gives type function


/// let's check type of object
console.log(typeof Object); //gives type function



