let count2 = 0;
function twoFloor() {
    let error1 = false;
    let error2 = false;
    let error3 = false;
    let errorMsg1 = '';
    let errorMsg2 = '';
    let errorMsg3 = '';

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
        sale: 0,
    };

    const result = document.getElementById('result');
    const house_square_meter = document.getElementById('houseSquareMeter');

    const house_height2_5 = document.getElementById('height-2_5');
    const house_height2_8 = document.getElementById('height-2_8');

    const roof1 = document.getElementById('roof-1');
    const roof2 = document.getElementById('roof-2');
    const roof3 = document.getElementById('roof-3');

    const panel1 = document.getElementById('panel-1');
    const panel2 = document.getElementById('panel-2');

    const portition1 = document.getElementById('portition-1');
    const portition2 = document.getElementById('portition-2');

    const wind = document.getElementById('wind');

    const decoration1 = document.getElementById('decoration-1');
    const decoration2 = document.getElementById('decoration-2');
    const decoration3 = document.getElementById('decoration-3');

    const drainageSystem1 = document.getElementById('drainage-system');

    const terrace1 = document.getElementById('terrace');

    const frameBeams1 = document.getElementById('frame-beams-1');
    const frameBeams2 = document.getElementById('frame-beams-2');

    const snowShields1 = document.getElementById('snow-shields');

    const sale2 = document.getElementById('sale2');

    //----------------------------------------------------------------

    //set default values
    if (count2 > 0) {
        defaultValues();
    }

    function defaultValues() {
        result.innerHTML = '';
        house_square_meter.value = '';
        house_height2_5.checked = true;
        roof1.checked = true;
        panel1.checked = true;
        portition1.checked = true;
        wind.value = '';
        decoration1.checked = false;
        decoration2.checked = false;
        decoration3.checked = false;
        drainageSystem1.checked = false;
        terrace1.value = '';
        snowShields1.checked = false;
        errorMsg1 = '';
        errorMsg2 = '';
        errorMsg3 = '';
        error1 = false;
        error2 = false;
        error3 = false;
        document.getElementById('errorMsg1').innerHTML = '';
        document.getElementById('errorMsg2').innerHTML = '';
        document.getElementById('errorMsg3').innerHTML = '';
        count2 = 0;
    }

    function checkNumber(el, limit) {
        if (el == '') {
            return 'Заполните поле кв. м';
        }
        if (!isNumeric(el)) {
            return 'Поле должно быть заполнено натуральным числом не меньше '+ limit;
        }
        if (el < limit) {
            return 'Число не должно быть меньше ' + limit;
        }
        return '';
    }

    function isNumeric(n) {
        for (let i = 0; i < n.length; i++) {
            if (isNaN(n[i])) return false;
        }
        return true;
    }

    //house_square_meter.addEventListener('change', getPrice);
    house_square_meter.addEventListener('keyup', getPrice);


    function getPrice() {

        houseSquareMeter = house_square_meter.value;
        errorMsg1 = checkNumber(houseSquareMeter, 80);
        if (errorMsg1=='') {
            houseSquarePrice();
            houseHeightPrice();
            roofPrice();
            panelThicknessPrice();
            portitionPrice();
            decorationPrice();
            drainingSystemPrice();
            frameBeamsPrice();
            snowShieldsPrice();
            error1 = false;
        }
        else {
            error1 = true;
        }
        document.getElementById('errorMsg1').innerHTML = errorMsg1;
        if (error1) {
            house_square_meter.classList.add('error-v');
        }
        else {
            house_square_meter.classList.remove('error-v');
        }
        getFinalPrice();
    }

    //квадрат метр дома (цена)
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

    //высота этажа (цена)
    house_height2_5.addEventListener('click', ()=> {
        finalPrice.houseHeight = 0;
        getFinalPrice();
    })

    house_height2_8.addEventListener('click', ()=> {
        finalPrice.houseHeight = houseSquareMeter*200;
        getFinalPrice();
    })

    function houseHeightPrice() {
        if (house_height2_5.checked) {
            finalPrice.houseHeight = 0;
        }
        else if (house_height2_8.checked) {
            finalPrice.houseHeight = houseSquareMeter*200;
        }
    }
    //------------------------

    //тип крыши (цена)
    function roofPrice() {
        if (roof1.checked) {
            finalPrice.roofType = houseSquareMeter*800;
        }
        else if (roof2.checked) {
            finalPrice.roofType = houseSquareMeter*1000;
        }
        else if (roof3.checked) {
            finalPrice.roofType = houseSquareMeter*1200;
        }
    }

    roof1.addEventListener('click', ()=> {
        finalPrice.roofType = houseSquareMeter*800;
        getFinalPrice();
    })

    roof2.addEventListener('click', ()=> {
        finalPrice.roofType = houseSquareMeter*1000;
        getFinalPrice();
    })

    roof3.addEventListener('click', ()=> {
        finalPrice.roofType = houseSquareMeter*1200;
        getFinalPrice();
    })
    //------------------------

    // толщина панели (цена)
    function panelThicknessPrice() {
        if (panel1.checked) {
            finalPrice.panelThickness = 0;
        }
        else if (panel2.checked) {
            finalPrice.panelThickness = houseSquareMeter*300;
        }
    }

    panel1.addEventListener('click', ()=> {
        finalPrice.panelThickness = 0;
        getFinalPrice();
    })

    panel2.addEventListener('click', ()=> {
        finalPrice.panelThickness = houseSquareMeter*300;
        getFinalPrice();
    })
    //------------------------

    //внутренные перегородки дома (цена)
    function portitionPrice() {
        if (portition1.checked) {
            finalPrice.housePortitions = 0;
        }
        else if (portition2.checked) {
            finalPrice.housePortitions = houseSquareMeter*600;
        }
    }

    portition1.addEventListener('click', ()=> {
        finalPrice.housePortitions = 0;
        getFinalPrice();
    })

    portition2.addEventListener('click', ()=> {
        finalPrice.housePortitions = houseSquareMeter*600;
        getFinalPrice();
    })
    //------------------------

    //окна (цена)
    wind.addEventListener('keyup', windowPrice);
    //wind.addEventListener('change', windowPrice);

    function windowPrice() {
        const val = wind.value;
        errorMsg2 = checkNumber(val, 1);
        if (errorMsg2=='') {
            finalPrice.windowCount = val*8000;
            error2 = false;
        }
        else if (errorMsg2=='Заполните поле кв. м') {
            finalPrice.windowCount = 0;
            error2 = false;
        }
        else {
            error2 = true;
        }
        document.getElementById('errorMsg2').innerHTML = error2? errorMsg2 : '';
        if (error2) {
            wind.classList.add('error-v');
        }
        else {
            wind.classList.remove('error-v');
        }
        getFinalPrice();
    }
    //---------------------------

    //внешная отделка дома (цена)
    let dec1Checked = true;
    let dec2Checked = true;
    let dec3Checked = true;
    decoration1.addEventListener('click', ()=>{
        if (dec1Checked) {
            finalPrice.homeDecoration = houseSquareMeter*1500;
            dec1Checked = false;
            dec2Checked = true;
            dec3Checked = true;
        }
        else {
            decoration1.checked = false;
            dec1Checked = true;
            finalPrice.homeDecoration = 0;
        }
        getFinalPrice();
    });

    decoration2.addEventListener('click', ()=>{
        if (dec2Checked) {
            finalPrice.homeDecoration = houseSquareMeter*1700;
            dec2Checked = false;
            dec1Checked = true;
            dec3Checked = true;
        }
        else {
            decoration2.checked = false;
            dec2Checked = true;
            finalPrice.homeDecoration = 0;
        }
        getFinalPrice();
    });

    decoration3.addEventListener('click', ()=>{
        if (dec3Checked) {
            finalPrice.homeDecoration = houseSquareMeter*4200;
            dec3Checked = false;
            dec1Checked = true;
            dec2Checked = true;
        }
        else {
            decoration3.checked = false;
            dec3Checked = true;
            finalPrice.homeDecoration = 0;
        }
        getFinalPrice();
    })

    function decorationPrice() {
        if (decoration1.checked) {
            finalPrice.homeDecoration = houseSquareMeter*1500;
        }
        else if (decoration2.checked) {
            finalPrice.homeDecoration = houseSquareMeter*1700;
        }
        else if (decoration3.checked) {
            finalPrice.homeDecoration = houseSquareMeter*4200;
        }
    }
    //--------------------------

    //Водосточная система (цена)
    drainageSystem1.addEventListener('click', ()=> {
        if (drainageSystem1.checked) {
            finalPrice.drainageSystem = houseSquareMeter*350;
        }
        else {
            finalPrice.drainageSystem = 0;
        }
        getFinalPrice();
    })

    function drainingSystemPrice() {
        if (drainageSystem1.checked) {
            finalPrice.drainageSystem = houseSquareMeter*350;
        }
        else {
            finalPrice.drainageSystem = 0;
        }
    }
    //-------------------------

    //терраса (цена)
    terrace1.addEventListener('keyup', terracePrice);
    //terrace1.addEventListener('change', terracePrice);

    function terracePrice(){
        const val = terrace1.value;
        errorMsg3 = checkNumber(val, 1);
        if (errorMsg3=='') {
            finalPrice.terrace = val*3000;
            error3 = false;
        }
        else if (errorMsg3=='Заполните поле кв. м') {
            finalPrice.terrace = 0;
            error3 = false;
        }
        else {
            error3 = true;
        }
        document.getElementById('errorMsg3').innerHTML = error3? errorMsg3: '';
        if (error3) {
            terrace1.classList.add('error-v');
        }
        else {
            terrace1.classList.remove('error-v');
        }
        getFinalPrice();
    }
    //-----------------------

    //каркасное балки (цена)
    function frameBeamsPrice() {
        if (frameBeams1.checked) {
            finalPrice.frameBeams = 0;
        }
        else if (frameBeams2.checked) {
            finalPrice.frameBeams = houseSquareMeter*1200;
        }
    }

    frameBeams1.addEventListener('click', ()=>{
        finalPrice.frameBeams = 0;
        getFinalPrice();
    })

    frameBeams2.addEventListener('click', ()=>{
        finalPrice.frameBeams = houseSquareMeter*1200;
        getFinalPrice();
    })
    //----------------------

    //снегозадержатели (цена)
    snowShields1.addEventListener('click', ()=> {
        if (snowShields1.checked) {
            finalPrice.snowShields = houseSquareMeter*350;
        }
        else {
            //code ...
            finalPrice.snowShields = 0;
        }
        getFinalPrice();
    })

    function snowShieldsPrice() {
        if (snowShields1.checked) {
            finalPrice.snowShields = houseSquareMeter*350;
        }
        else {
            //code ...
            finalPrice.snowShields = 0;
        }
    }


    sale2.addEventListener('click', ()=>{
      getFinalPrice();
      if (sale2.checked) {
        finalPrice.sale = (-1)*(finalSum/20);
      }
    
    })
    //----------------------
    let finalSum;
    function getFinalPrice() {
        let sum = 0;
        const val = house_square_meter.value;
        if (val=='') {
            error1 = true;
            errorMsg1 = 'Заполните поле кв. м';
            house_square_meter.classList.add('error-v');
            document.getElementById('errorMsg1').innerHTML = errorMsg1;
        }
        if (!error1 && !error2 && !error3) {
            for (let key in finalPrice) {
                sum+= finalPrice[key];
            }
            finalSum1=sum;
            result.innerHTML = sum;
        }
        else {
            result.innerHTML = '';
        }
    }
    
    count2++;
}
