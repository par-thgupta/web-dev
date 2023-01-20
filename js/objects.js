console.log("connected")

// object is key value pair
let phone = {
    "Samsung" : 10000,
    "Apple" : 20000,
    "Sony" : 15000,
    "Poco" : 9500
}
console.log(phone[0]);
phone["Samsung"] = phone["Samsung"] + "ok";
console.log(phone)