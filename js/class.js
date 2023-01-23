// class Persons{
//     constructor (name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let p1 = new Persons("Parth",24);
// console.log(p1)


// class Car{
//     constructor(name,color, price){
//         this.name = name;
//         this.color = color;
//         this.price = price;
//     }
//     printProperyOfCar(){
//         console.log(this.name)
//         console.log(this.color)
//         console.log(this.price)
//     }
// }

// let car1 = new Car("audi","black",4000000);
// car1.printProperyOfCar();






// getter and setter
// class Car{
//     constructor(name,color,price){
//         this.name = name;
//         this.color = color;
//         this.price = price;
//     }
//     get getName(){
//         return this.name;
//     }
//     set setName(name){
//         this.name = name;
//     }
//     get getcolor(){
//         return this.color;
//     }
//     set setcolor(color){
//         this.name = color;
//     }
//     get getprice(){
//         return this.price;
//     }
//     set setprice(price){
//         this.name = price;
//     }
// }
// let c1 = new Car("bmw","white",5000000);
// c1.setName = "audi";
// console.log(c1);
// console.log(c1.getcolor)

// inheritance

class Car{
    constructor(name,color,price){
        this.name = name;
        this.color = color;
        this.price = price;
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name = name;
    }
    get getcolor(){
        return this.color;
    }
    set setcolor(color){
        this.name = color;
    }
    get getprice(){
        return this.price;
    }
    set setprice(price){
        this.name = price;
    }
}

class racingCar extends Car{
    constructor(name,color,price,speed){
        super(name,color,price);
        this.speed = speed;
    }
    get getSpeed(){
        return this.speed;
    }
    set setspeed(speed){
        this.speed = speed;
    }
}
let c1 = new Car("bmw","white",5000000);
c1.setName = "audi";
console.log(c1);
console.log(c1.getcolor)

console.log("..................");
let r1 = new racingCar("farrai","Blue",6000000,300);
console.log(r1)

r1.setName = "jaguar"

console.log(r1)


