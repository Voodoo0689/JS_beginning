/* Первое задание
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, потому что оператор ++ увиличивает значение а на 1 сразу
d = b++; alert(d);           // 1, потому что оператор ++ после b и значение вырастет на 1, после операции alert
c = (2+ ++a); alert(c);      // 5, а уже равна 2, оператором ++ мы прибавляем 1 и к полученному прибавляем 2.
d = (2+ b++); alert(d);      // 4, два плюс (b = 2), после чего b увеличиваем на 1
alert(a);                    // 3, прибавили единицу в примере 1 и примере 3
alert(b);                    // 3, прибавили единицу в примере 2 и примере 4
*/


/* Второе задание
var a = 2;
var x = 1 + (a *= 2);        // ответ: 5, потому что (a *= 2) это тоже, что а * 2
*/


/* Третье задание
var a = 5
var b = 10
var c

if (a >= 0 && b >= 0) {
    c = a - b;
} else if (a < 0 && b < 0) {
    c = a * b;
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    c = a - b;
}

console.log(c)
*/



/* Четвёртое задание
var x = 2

switch (x) {
    case 0:
        console.log(1)
    case 1:
        console.log(2)
    case 2:
        console.log(3)
    case 3:
        console.log(4)
    case 4:
        console.log(5)
    case 5:
        console.log(6)
    case 6:
        console.log(7)
    case 7:
        console.log(8)
    case 8:
        console.log(9)
    case 9:
        console.log(10)
    case 10:
        console.log(11)
    case 11:
        console.log(12)
    case 12:
        console.log(13)
    case 13:
        console.log(14)
    case 14:
        console.log(15)
        break;
    default:
        console.log("err")
        break;
}
*/


/* 5 и 6 задание. По нему вопрос. При выводе в консоль, после отображения результата
появляется строчка undefined, я не попял почему.

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a * b;
}



function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            console.log(plus(arg1, arg2))
            break;
        case "-":
            console.log(minus(arg1, arg2))
            break;
        case "/":
            console.log(div(arg1, arg2))
            break;
        case "*":
            console.log(mult(arg1, arg2))
            break;
        default:
            console.log("err")
            break;
    }
}

console.log(mathOperation(15, 2, 8))
*/
