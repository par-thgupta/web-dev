// let btn = document.getElementById('addButton');
// let inp = document.getElementById('firstInput');

// btn.onclick = function fun() {
//     let input = inp.value;
//     if (input != "") {
//         let x = document.createElement('li');
//         let y = document.createElement('p');
//         y.innerHTML = "Task";
//         x.addEventListener('click',function(){
//             x.style.textDecoration = 'line-through'
//         })
//         x.addEventListener('dblclick',function(){
//             x.remove()
//         })
//         x.innerHTML = input;
//         let l = document.getElementById('list');
//         l.after(x);
//     }
//     else {
//         alert("add some task")
//     }
//     inp.value = ""
    
//     let list = document.getElementsByTagName('li')
//     list.onclick = function(){
//         console.log(list)
//     }
// }














let con = document.getElementsByClassName('container')
let but = document.getElementById('addButton');
but.addEventListener('click',()=>{
    let inp = document.getElementById('Input');
    if(inp.value != ''){
        let newtask = document.createElement('li');
        newtask.innerHTML = inp.value;
        let ulist = document.getElementById('list');
        ulist.append(newtask)
        newtask.addEventListener('click',()=>{
            newtask.style.textDecoration = 'line-through'
        })
        newtask.addEventListener('dblclick',()=>{
            newtask.remove()
        })
        inp.value = ""
    }
    else{
        alert("Enter the task first then add")
    }
})