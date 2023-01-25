// const x = new Promise(function(resolve,reject){
//     setTimeout(() => {
        
//         let rn = Math.random();
//         console.log(rn);
//         if(rn > 0.5)resolve();
//         else reject();
//     }, 2000);
// });

// x.then(function(){
//     console.log("Inside resolve")
// })
// .catch(function(){
//     console.log("Inside reject")
// })



fun = ()=>{
    return new Promise ((reject,resolve)=>{
        setTimeout(() => {
            let rn = Math.random();
            console.log(rn);
            if(rn > 0.5)resolve();
            else reject();
        }, 2000);
    })
}
fun().then(function(){
    console.log('promises resolve.')
}).catch(function(){
    console.log('promises reject.')
});