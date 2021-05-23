//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let a = 2;
let j = 2;

while (a <= 100) {
	nextNum:
	for (a = 2; a <= 100; a++) {

		for (j = 2; j < a; j++) {

			if (a % j == 0) continue nextNum
		}
		console.log(a);
	}

};


//2. С этого урока начинаем работать с функционалом интернет-магазина. 
//Предположим, есть сущность корзины. 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
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

// ------------------------------------------------------------------------------------------------------------

// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

console.log('======== 3 задание ========');
function countBasketPrice(basket) {
	let funBasketPrice = 0;
	for (let prod of basket) {
		funBasketPrice += prod.price;
	}
	return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");
