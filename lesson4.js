//Первое задание.

function CutNumber(Number) {

    this.init = function (Num) {
        if (0 < parseInt(Num) && parseInt(Num) < 1000) {
            this.сотни = parseInt(Num / 100);
            this.десятки = parseInt((Num - this.сотни * 100) / 10);
            this.единицы = parseInt(Num - this.десятки * 10 - this.сотни * 100);
        } else {
            if (typeof (this.единицы) != "undefined") {
                delete this.сотни;
                delete this.десятки;
                delete this.единицы;
            }
        }
    }

    this.init(Number);
}


var testNum = new CutNumber(256);
console.log(testNum);
testNum.init(543);
console.log(testNum);
testNum.init(232432);
console.log(testNum);

var testNum2 = new CutNumber(2526);
console.log(testNum2);


//Второе задание 

function getNumber(min, max) {
    let number = parseInt(Math.random() * (max - min) + min);
    if (number === -0) number = 0;
    return number;
}

let basket = [
    {
        product: "pen",
        price: getNumber(50, 100)
    },
    {
        product: "pencil",
        price: getNumber(50, 100)
    },
    {
        product: "file",
        price: getNumber(50, 100)
    },
    {
        product: "paper",
        price: getNumber(50, 100)
    }
];

let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + " у.е.");


console.log('================');
function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");