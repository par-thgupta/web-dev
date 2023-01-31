let task = [];

let btn = document.getElementById('btn')

btn.addEventListener('click',()=>{

    let textselect = document.getElementById('inputText');

    let inputtext = textselect.value;

    let task = document.createElement('p')

    task.innerHTML = inputtext;

    let yi = task.length;
    console.log(yi)

    let divtask = document.getElementById('container')

    divtask.append(task)
    textselect.value=""



})