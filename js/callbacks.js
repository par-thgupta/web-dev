// function fun(func){
//     console.log("In fun");
//     func();
// }
// function func(){
//     console.log("In func");
// }
// fun(func);

// or 

// function fun(func){
//     console.log("In fun");
//     func();
// }
// fun(function func(){
//     console.log("In func");
// });






// array methords

// 1)map 

// function sqr(num){
//     return (num*num);
// }
// let arr = [1,2,3,4,5,6];
// let b = arr.map(sqr);
// console.log(b);


// or

// better way given below
// let arr = [1,2,3,4,5,6];
// let b = arr.map(function(num){
//     return (num*num);
// });
// console.log(b);
// console.log(arr); 


// 2) filter

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let brr = arr.filter(function(num){
//     if(num%2 == 0){
//         return true;
//     }
//     return false;
// });
// console.log(brr);


// use of filter methord
// let menu = ['Chhole Kultche', 'Kadhai Chicken', 'Kadhai Paneer', 'Dal Makhni', 'Jeer a Rice', 'Palak Paneer', 'Onion Rings', 'Garlic Bread', 'Egg Curry', 'Onion Parantha', 'Garlic Naan', 'Pizza', 'Pav Bhaaji', 'Chicken Korma', 'Butter Chicke n', 'Malai Chaap', 'Hydrabadi Chicken Biryaani', 'Salad', 'Lemon and Garlic Roast Chicken', 'Garlic Rasam']

// let vegMenu = menu.filter(function(dish){
//     let categoryOfDish = dish.toLowerCase();
//     if(categoryOfDish.indexOf('chicken') != -1 || categoryOfDish.indexOf('egg') != -1){
//         return false;
//     }
//     return true;
// });


// let nonVegMenu = menu.filter(function(dish){
//     let categoryOfDish = dish.toLowerCase();
//     if(categoryOfDish.indexOf('chicken') != -1 || categoryOfDish.indexOf('egg') != -1){
//         return true;
//     }
//     return false;
// });


// let jainMenu = menu.filter(function(dish){
//     let categoryOfDish = dish.toLocaleLowerCase();
//     if(categoryOfDish.indexOf('chicken') != -1 || categoryOfDish.indexOf('egg') != -1 || categoryOfDish.indexOf('onion') != -1 || categoryOfDish.indexOf('garlic') != -1){
//         return false;
//     }
//     return true;
// })





// console.log('full menu : ', menu);
// console.log('vegMenu : ',vegMenu);
// console.log('nonVegMenu : ',nonVegMenu);
// console.log('jainMenu : ',jainMenu);



// let arr = [1,2,3,4,5,6];
// arr.forEach(i => {
    
// });


