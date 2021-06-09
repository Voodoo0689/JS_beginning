const $content1 = document.getElementById("1");
const $content2 = document.getElementById("2");
const $content3 = document.getElementById("3");
const $main = document.querySelector('main');
const $basket_content = document.getElementById("cart");
const $popup = document.querySelector('#popup');
const $closePopupBtn = document.querySelector('#closePopupBtn');


    let basket = {
        "gtx1060": 0,
        "xeon-1230": 0,
        "z67": 0
    };

let video = {
    name: "GTX1060",
    prise: 25000,
    description: "видеокарта"
};

let cpu = {
    name: "xeon-1230",
    prise: 5000,
    description: "процессор"
}

let m_board ={
    name: "z67",
    prise: 3500,
    description: "м.плата"
}

////////////////////////////////////////

$content1.innerHTML =
    '<h2>' + video.name +'</h2> <p>' + video.description + '</p> <p>' + video.prise +
    'руб. </p> <button class="button-primary plus" data-id = "#">добавить</button><button>удалить</button> ';

$content2.innerHTML =
    '<h2>' + cpu.name + '</h2> <p>' + cpu.description +'</p> <p>' + cpu.prise +
    'руб. </p> <button class="button-primary plus" data-id = "#">добавить</button><button>удалить</button> ';

$content3.innerHTML =
    '<h2>' + m_board.name + '</h2> <p>' + m_board.description + '</p> <p>' + m_board.prise +
    'руб. </p> <button class="button-primary plus" data-id = "#">добавить</button><button>удалить</button> ';

/////////////////////////////////////////
function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}


function add_basket(name, price){
    basket[name] = price
};


/////////////////////////////////////////
function showPopup() {
    $popup.style.display = 'block'
}
function hidePopup() {
    $popup.style.display = 'none'
}
$basket_content.addEventListener('click', showPopup);
$closePopupBtn.addEventListener('click', hidePopup);
$nextSectionBtn.addEventListener('click', nextSection);


/////////////////////////////////////////

document.onclick = event => {
    console.log(event.target.classList);
}
