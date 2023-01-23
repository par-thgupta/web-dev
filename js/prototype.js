console.log("Connected")



// let person = {
//     name : "Parth",
//     age : 20,
//     weight : 65
// };

// let p1 = Object.create(person);
// console.log(p1)

// console.log(p1.name)

// console.log("...............");

// let p2 = Object.create(p1);

// // console.log(p2.name);


// // console.log("...............");

// // let chk = (p1.__proto__  === person);
// // console.log(chk)

// // console.log(p1.hasOwnProperty('name'));

// // console.log("...............");
// // console.log(Object.prototype.__proto__);

// let x = true;
// console.log(typeof(x));
// console.log((x.__proto__) == Boolean.prototype) 
// console.log(Boolean.prototype.__proto__ == Object.prototype)






function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function (){
    console.log(`hi form ${this.name}`);
}
const p1 = new Person("Parth",20);
const p2 = new Person("Chintu",20);
let v = p1.sayHi ;
console.log(v)
console.log(p2)


