console.log("Connected")

const b = document.getElementById("2ndbutton");

function fun(){
    shout()
    power()
}
function shout(){
    console.log("shout")
}
function power(){
    console.log("power")
}
b.ondblclick  = fun;

const section = document.querySelectorAll("section button")
console.log(section)

for(let c of section){
    c.addEventListener('mouseenter',(e)=>{
        // console.log(e)
        e.target.style.color = 'red'
        e.target.style.border = '2px solid purple'

    })
    c.addEventListener('mouseleave',(e)=>{
        // console.log(e)
        e.target.style.color = ''
        e.target.style.border = ''

    })
}