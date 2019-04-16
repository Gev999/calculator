let houseSquareMeter = 0;     // квадрат метр дома

const finalPrice={
    price: 0,                // начальная цена
    houseHeight: 0,          // высота этажа
    roofType: 0,             // тип крыши
    panelThickness: 0,       // толщина панели
    housePortitions: 0,      // внутренные перегородки дома
    windowCount: 0,          // количества окон
    homeDecoration: 0,       // внешная отделка дома
    drainageSystem: 0,       // Водосточная система 
    terrace: 0,              // терраса
    frameBeams: 0,           // каркасное балки
    snowShields: 0,          // снегозадержатели
 };

const result = document.getElementById('result');
const house_square_meter = document.getElementById('houseSquareMeter'); 
const house_height2_5 = document.getElementById('height-2.5');
const house_height2_8 = document.getElementById('height-2.8');

house_square_meter.addEventListener('change', getPrice);
house_square_meter.addEventListener('keyup', getPrice);


 function getPrice() {

    // form validation of houseSquareMeter code
    // ....
    houseSquareMeter = parseInt(house_square_meter.value);
    //console.log(houseSquareMeter);
    if (isNaN(houseSquareMeter)) {
        finalPrice.price = 0;
        //console.log(finalPrice.price);
    }
    else {
        houseSquarePrice();
        houseHeightPrice();
        //......
    }
    arraySum();
 }

 //house square price
 function houseSquarePrice() {
    if (houseSquareMeter<=99) {
        finalPrice.price=houseSquareMeter*9500
    }
    else if (houseSquareMeter>=100 && houseSquareMeter<=130) {
        finalPrice.price=houseSquareMeter*9000
    }
    else if (houseSquareMeter>=131) {
        finalPrice.price=houseSquareMeter*8500
    }
 }
// --------------------------

//house height price

house_height2_5.addEventListener('click', ()=> {
    finalPrice.houseHeight = 0;
    arraySum();
})

house_height2_8.addEventListener('click', ()=> {
    finalPrice.houseHeight = houseSquareMeter*200;
    arraySum();
})

function houseHeightPrice() {
    if (house_height2_5.checked) {
        finalPrice.houseHeight = 0;
    }
    else {
        finalPrice.houseHeight = houseSquareMeter*200;
    }
}
//------------------------



 function arraySum() {
    let sum = 0;
    if (finalPrice.price!=0) {
        for (let key in finalPrice) {
            sum+= finalPrice[key];
        }
        result.innerHTML = sum;
    }
    else {
        result.innerHTML = 'empty';
    }
}





 