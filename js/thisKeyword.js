// console.log("HELLO");

// // explisit
// const person = {
//     name : "Parth",
//     age : 20,
//     sayHi : (function(){
//         console.log(this);
//         console.log(`hello form ${this.name}`);
//     })
// };

// person.sayHi()


// implesit

// let fun = ((name,age) =>{
//     this.name = name;
//     this.age = age;
//     // console.log(this.name)
//     // console.log(this.age)
//     console.log(this);
// });
// const a = {
//     k : true,
//     l : 45
// };

// console.log(a)
// console.log("....................")

// one of doing it
// fun.call(a,'parth',20)
// console.log(a)

// second way of doing it

// let x = fun.bind(a);

// x("parth",23);
// x("pth",3);

// console.log(a)





// const sum = {
//     ok : function oo(){
//         console.log(this) // this is refering to sum
//     },
//     name : 4
// }
// sum.ok(); 



const sum = {
    ok : () =>{
        console.log(this);
    }
}
sum.ok()