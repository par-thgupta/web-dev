// const age = prompt("Enter your age : ");
// console.log(age);
// // console.log(typeof(age));
const age = Number(prompt("Enter your age : "));
console.log(age);
console.log(typeof(age));
if(age < 18)console.log("You can not enter.")
else if(age >= 18 && age < 25)console.log("You can enter but cannot drink.")
else console.log("You can enter and drink")