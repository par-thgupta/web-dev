// console.log("Connected")


// let arr = [1,2,3,4,5,77];
// console.log(arr.length)
// console.log(arr[3])
// console.log(typeof(arr))
// console.log(arr)

// // 
// let arr1 = [1,2,"hh",'d',undefined,null,true];
// console.log(typeof(arr1))
// arr1[33] = 'parth'
// console.log(arr1[33])


// methords 
// basic

// let arr = [1,2,3,4,5];
// console.log(arr)
// arr.push(77);
// console.log(arr)

// let x =arr.pop();
// console.log(x)
// console.log(arr)

// arr.unshift(12);
// console.log(arr)

// arr.shift();
// console.log(arr);

// let y = prompt("Enter the name : ");
// console.log(y);

// advance array operation



// arrays in js are reference type
// 1
// let arr1 = [1,2,'parth',true];
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);

// arr2.push(3.14);
// console.log(arr2)
// console.log(arr1)
// let chk = (arr1===arr2)
// console.log(chk)


// 2 - slice 
// let arr1 = [1,2,3,4,5,6];
// let arr2 = arr1.slice();
// console.log(arr1);
// console.log(arr2);
// console.log(arr1===arr2)

// let arr3 = arr1.slice(2);
// console.log(arr1);
// console.log(arr3)

// let arr4 = arr1.slice(2,4);
// console.log(arr1);
// console.log(arr4)



// 3 - splice

// let arr1 = [1,2,3,4,5,6];
// // arr1.splice(2);

// // arr1.splice(2,2);


// arr1.splice(2,3,7,8,9);


// console.log(arr1)

// let x = arr1.find('7');
// console.log(x)


// 4 - spilt

// let s = 'https://online.codingblocks.com/app/player/253200/content/251980/13333/lecture';
// let arr1 = s.split('c',4);
// console.log(arr1);

// 5 - join 

// let arr1 = [1,2,3,4,5,6];
// let arr2 = arr1.join('->');
// console.log(arr2);


// 6 - concat

// let arr1 = [1,2,3,4,5,6];
// let arr2 = [7,8,9];
// let arr3 = arr1.concat(arr2).pop();
// console.log(arr3)
