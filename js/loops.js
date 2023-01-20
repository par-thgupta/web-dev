for(let i=1;i<=10;i++){
    console.log(i);
}
console.log("...................");
let a = 1;
while(a <= 5){
    console.log(a);
    a++;
}
console.log("...................");
let b = 1;
do{
    console.log(b);
}while(b < 0)

console.log("...................");
// for-in-loop work with iteratable items only like array,objects etc
let  personAge = {
    "Amar" : 34,
    "Ujjwal" : 22,
    "Neha" : 45,
    "Raman" : 12,
    "Jagriti" : 20
};
for(let person in personAge){
    console.log(personAge[person]);
}

console.log("...................");


let arr = [1,2,3,4,5,6];
for(let i of arr)console.log(i);
console.log("...................");
for(let i in arr)console.log(arr[i]);


console.log("...................");

// forEach

let x = [1,2,3,4,4,5,6,7];
x.forEach((i) =>{
    console.log(i);
});