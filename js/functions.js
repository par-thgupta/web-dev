console.log("connected");

// 1)
// function add(x,y){
//     return (x+y);
// }
// console.log(add(10,20))
// console.log(add(true,10))
// console.log(add("Parth","gupta"))
// console.log(add(10,"Parth"))
// console.log(add(true,"Parth"))
// console.log(add(null,"Parth"))
// console.log(add(undefined,"Parth"))
// console.log(add(10,""))
// console.log(add(10,[]))


// function in a variable 
// 2)
// const fun = function add(x,y){
//     return (x+y);
// }
// console.log(fun(2,3));

// the above function is equal to 

// 3)
// anonymousu function
// const fun = function(x,y){return (x+y);}
// console.log(fun(5,1));

// 4)
// arrow function
// const sum = (x,y)=>{return (x+y);};
// console.log(sum(2,4));



// higher order function

function fun1(funsion){
    console.log("inside fun1");
    console.log(fun2);
    fun2();
}

function fun2(){
    console.log("inside fun2");
    // fun1(); ----------------> infinite loop (;
}
fun1(fun2);