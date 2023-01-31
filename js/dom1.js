console.log("connected")


// --------------------------------------------------- getElementByTagName ---------------------------------------------------
const h1 = document.getElementsByTagName('h1');

console.log(h1);

let h = h1[0];

h.style.color = '	#F4C430'
console.log(h.style)


h.style.border = "3px solid blue";
h.style.backgroundColor = "lightblue"; 

h.style.textShadow = "1px  5px 	#F4C430 "
// --------------------------------------------------- getElementById ---------------------------------------------------
let p = document.getElementById('psf')
console.log(p)


p.style.color = "purple"