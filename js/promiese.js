// let newpromise = new Promise(function (resolve, reject) {
//     let rn = Math.random();
//     console.log(rn);
//     if (rn < 0.5) resolve();
//     else reject();
// });
// newpromise.then(function () {
//     console.log("Function is resolve");
// })
//     .catch(function () {
//         console.log("Function is reject");
//     })








// or function can return the promise 


// fun(()=>{
//     return new Promise((resolve,reject) => {
//         let rn = Math.random();
//         console.log(rn);
//         if (rn < 0.5) resolve();
//         else reject();
//     });
// })


// fun().then(
//     function () {
//         console.log("Function is resolve");
//     }
// ).catch(function () {
//     console.log("Function is reject");
// });












function downloadFile(url){
    return new Promise(function(resolve,reject){
        console.log(`File is started downloading for ${url}`);
        setTimeout(() => {
            const profile = url.split('/').pop();
            resolve(profile);
        }, 2000);
    });
};
function compressFile(profile){
    return new Promise(function(resolve,reject){
        console.log(`File is started compressing for ${profile}`);
        setTimeout(() => {
            const compress = profile.replace("jpg","zip");
            resolve(compress);
        }, 3000);
    });
};
function uploadFile(profile){
    return new Promise(function(resolve,reject){
        console.log(`file is starting uploading for ${profile}`);
        setTimeout(() => {
            const upload = "https://localsystem/"+profile;
            resolve(upload);
        }, 2000);
    });
}
downloadFile("https://facebook.com/profile.jpg")
.then(compressFile)
.then(uploadFile)
.then((upload)=>{
    console.log(`File upload succesfull at ${upload}`);
    console.log("Successfull");
}).catch((error)=>{
    console.log(`Something went wrong ${error}`);
});