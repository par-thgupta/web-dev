console.log("Connected")

downloadFile("https://online.codingblocks.com/app/player/253200/content/251980/13388/lecture/profile.jpg",function(path){
    console.log(`file download successfull : ${path}`);    
    compressFile(path,function(Compresspath){
        console.log(`file compress successfull : ${Compresspath}`);   
        uploadFile(Compresspath,function(uploadpath){
            console.log(`file uploaded successfull : ${uploadpath}`);   
        });
    });
});

let downloadFile = (url,download)  =>{
    console.log(`start file download for ${url}`);
    setTimeout(() => {
        const path = (url.split('/').pop());
        download(path);
    }, 3000);
}

let compressFile = (url,compress) =>{
    console.log(`starting file compressing for ${url}`);
    setTimeout(() => {
        const parth = (url.split('/').pop().replace("jpg","zip"));
        compress(parth)
    }, 2000);
    
}

let uploadFile = (compressFile,uploaded) =>{
    console.log(`starting file uploading for ${compressFile}`);
    setTimeout(() => {
        const uploadPath = `https://localstorage/`+compressFile;
        uploaded(uploadPath);
    }, 3000);
    
}
