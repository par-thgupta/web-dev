// let response = (`{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}
// `);
// let data = JSON.parse(response);
// console.log(data.ticker.price);




// ............................................api request........................................................



// type 1 XMLHTTPREQUEST (DONOT USE IT)

// let req = new XMLHttpRequest();
// req.onload = function () {
//     console.log(this)
// }
// req.onerror = function () {
//     console.log(this)
// }
// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();


// TYPE 2 FETCH (USE THIS INSTEAD OF TYPE 1)
 
// fetch('https://reqres.in/api/users')
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch(()=>{
//         console.log("error")
//     })




// fetch('https://reqres.in/api/users')
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//         console.log("error")
//     })




// Type 3 AXIOS

// first add(new) script in html   ---> <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
axios.get('https://reqres.in/api/users')
    .then((res)=>{
        console.log(res);
    })
    .catch((erro)=>{
        console.log(erro);
    })