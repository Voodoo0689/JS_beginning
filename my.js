const $content1 = document.getElementById("1");
const $content2 = document.getElementById("2");
const $content3 = document.getElementById("3");
const $main = document.querySelector('main');
const $basket_content = document.getElementById("cart");
const $popup = document.querySelector('#popup');
const $closePopupBtn = document.querySelector('#closePopupBtn');
const $nextSectionBtn = document.querySelector('#nextSectionBtn');
const $cartDetails = document.querySelector('#cart-details');
const $clearCart = document.querySelector('#clear')
let currentCartSection = 1;



let basket = {
    count: 0,
    prise: 0,
    count_video:0,
    count_cpu:0,
    count_m_board:0
};


let video = {
    id: "vd1",
    name: "GTX1060",
    prise: 24999,
    description: "видеокарта"
};

let cpu = {
    id: "cp2",
    name: "xeon-1230",
    prise: 4895,
    description: "процессор"
}

let m_board ={
    id: "mb3",
    name: "z67",
    prise: 3459,
    description: "м.плата"
}

////////////////////////////////////////

$content1.innerHTML =
    '<h2>' + video.name +'</h2> <p>' + video.description + '</p> <p>' + video.prise +
    'руб. </p> <button class="button" id ='+video.id+'>добавить</button>';

$content2.innerHTML =
    '<h2>' + cpu.name + '</h2> <p>' + cpu.description +'</p> <p>' + cpu.prise +
    'руб. </p> <button class="button" id ='+ cpu.id +'>добавить</button>';

$content3.innerHTML =
    '<h2>' + m_board.name + '</h2> <p>' + m_board.description + '</p> <p>' + m_board.prise +
    'руб. </p> <button class="button" id ='+ m_board.id +'>добавить</button>';

/////////////////////////////////////////
function drowCart(){
    $basket_content.innerHTML =
        "<div id='cart'><p>Корзина:</p> <p>В корзине " + basket.count +
        " товар(ов), на " + basket.prise + " р.</p> </div>"
};




/////////////////////////////////////////
function showPopup() {
    $popup.style.display = 'block'
}
function hidePopup() {
    $popup.style.display = 'none'
}
/////////////////////////////////////////

function drawCartItem({prise, count_video, count_cpu, count_m_board}) {
    $cartDetails.innerHTML = `<div>
        <h2>Видеокарты "GTX1060"</h2>
        <p>${count_video}</p>
        <h2>Процессоры "Xeon"</h2>
        <p>${count_cpu}</p>
        <h2>Мат.плата "z67"</h2>
        <p>${count_m_board}</p>
        <hr>
        <p>Цена товара: ${prise} Рублей.</p>       
        
    </div>`;


};


$clearCart.addEventListener('click', function (){
    basket.prise = 0;
    for (let key in basket){
        basket[key] = 0;
        let {prise, count_video, count_cpu, count_m_board} = basket
        drawCartItem({prise, count_video, count_cpu, count_m_board})
        drowCart()
    };



});







////////////////////////////////////////


function nextSection() {
    document.querySelector('#section-' + currentCartSection).style.display = "none";
    currentCartSection = currentCartSection < 3 ? currentCartSection + 1 : 1;
    document.querySelector('#section-' + currentCartSection).style.display = "block";
};


$basket_content.addEventListener('click', showPopup);
$closePopupBtn.addEventListener('click', hidePopup);
$nextSectionBtn.addEventListener('click', nextSection);


/////////////////////////////////////////



function getPrice(id){
    this.id = id
    if (id == video.id){
        basket.count += 1
        basket.count_video+=1
        basket.prise += video.prise

    }
    if (id == cpu.id){
        basket.count += 1
        basket.count_cpu+=1
        basket.prise += cpu.prise
    }
    if (id == m_board.id){
        basket.count += 1
        basket.count_m_board+=1
        basket.prise += m_board.prise
    }
    drowCart()
    let {prise, count_video, count_cpu, count_m_board} = basket
    drawCartItem({prise, count_video, count_cpu, count_m_board})
}


$main.onclick = event => {
    let target = event.target
    if(target.tagName === "BUTTON"){
        getPrice(target.id)
    }
};





