console.log("connected");



let item = document.getElementsByClassName('item');
for (let i of item) {

    i.addEventListener('click', (text) => {
        let input = text.target.innerText;
        let inputtest = document.getElementById("inputID");
        if (input == 'AC') {
            inputtest.value = "";
            return;
        }
        else if (input == 'Delete') {
            let newinpLength = inputtest.value.length;
            let newinp = inputtest.value.slice(0, newinpLength - 1);
            inputtest.value = newinp;
            return;
        }
        else if (input == 'X') {
            input = '*';
        }
        else if (input == '&#247;') {
            input = '/';
        }
        else if (input == 'R') {
            alert("Developed by : THE PARTH")
            return;
        }
        else if (input == 'ANS') {
            let ans = eval(inputtest.value);
            inputtest.value = ans;
            console.log(ans);
            return;
        }
        inputtest.value += input;
    });
}