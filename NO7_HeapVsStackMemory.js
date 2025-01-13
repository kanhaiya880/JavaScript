/// Primitive data types copy the value and uses stack memory
let Name="Rossum"
console.log(Name);
let Company=Name
console.log(Company);
Company="Python Foundation"
console.log(Company);


/// Reference (non-primitive)
//here assignes reference only
let userOne={
    Name:"Alen Turning",
    email:"Alen@gmail.com"
}
console.log(userOne);

let userSecond=userOne
console.log(userSecond);
userSecond.Name="Rossum"
console.log(userSecond);