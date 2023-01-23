console.log("Connected");

function c(){
    let var2 = 100;
    function closure1(){
        var2++;
        console.log(var2);
    }
    return closure1;
}
let a = c();

a(); 