let count = 0;
function floorPrice(idx) {
    
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

    const result = document.getElementsByClassName('result')[idx];
    const house_square_meter = document.getElementsByClassName('houseSquareMeter')[idx];

    const house_height2_5 = document.getElementsByClassName('height-2_5')[idx];
    const house_height2_8 = document.getElementsByClassName('height-2_8')[idx];

    const roof1 = document.getElementsByClassName('roof-1')[idx];
    const roof2 = document.getElementsByClassName('roof-2')[idx];
    const roof3 = document.getElementsByClassName('roof-3')[0];

    const panel1 = document.getElementsByClassName('panel-1')[idx];
    const panel2 = document.getElementsByClassName('panel-2')[idx];

    const portition1 = document.getElementsByClassName('portition-1')[idx];
    const portition2 = document.getElementsByClassName('portition-2')[idx];

    const wind = document.getElementsByClassName('wind')[idx];

    const decoration1 = document.getElementsByClassName('decoration-1')[idx];
    const decoration2 = document.getElementsByClassName('decoration-2')[idx];
    const decoration3 = document.getElementsByClassName('decoration-3')[idx];

    const drainageSystem1 = document.getElementsByClassName('drainage-system')[idx];

    const terrace1 = document.getElementsByClassName('terrace')[idx];

    const frameBeams1 = document.getElementsByClassName('frame-beams-1')[0];
    const frameBeams2 = document.getElementsByClassName('frame-beams-2')[0];

    const snowShields1 = document.getElementsByClassName('snow-shields')[idx];

    const sale = document.getElementById('sale');

    //---------------------------------------------------------------------------

    //set default values
    if (count > 0) {
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
        if (idx==1) {
            frameBeams1.checked = true;
        }
        errorMsg1 = '';
        errorMsg2 = '';
        errorMsg3 = '';
        error1 = false;
        error2 = false;
        error3 = false;
        document.getElementsByClassName('errorMsg1')[idx].innerHTML = '';
        document.getElementsByClassName('errorMsg2')[idx].innerHTML = '';
        document.getElementsByClassName('errorMsg3')[idx].innerHTML = '';
        house_square_meter.classList.remove('error-v');
        wind.classList.remove('error-v');
        terrace1.classList.remove('error-v');
        count = 0;
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

    //--------------------------------------------------------------------------------

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
            if (idx == 1) frameBeamsPrice();
            snowShieldsPrice();
            error1 = false;
        }
        else {
            error1 = true;
        }
        document.getElementsByClassName('errorMsg1')[idx].innerHTML = errorMsg1;
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
        if (idx==0) {
            if (houseSquareMeter<=99) {
                finalPrice.price=houseSquareMeter*12500
            }
            else if (houseSquareMeter>=100 && houseSquareMeter<=120) {
                finalPrice.price=houseSquareMeter*12000
            }
            else if (houseSquareMeter>=121 && houseSquareMeter<=130) {
                finalPrice.price=houseSquareMeter*11500
            }
            else if (houseSquareMeter>=131){
                finalPrice.price=houseSquareMeter*11000
            }
        }
        else {
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
    }
    // --------------------------

    //высота этажа (цена)
    house_height2_5.addEventListener('click', ()=> {
        finalPrice.houseHeight = 0;
        getFinalPrice();
    })

    house_height2_8.addEventListener('click', ()=> {
        finalPrice.houseHeight = idx==0 ? houseSquareMeter*300 : houseSquareMeter*200;
        getFinalPrice();
    })

    function houseHeightPrice() {
        if (house_height2_5.checked) {
            finalPrice.houseHeight = 0;
        }
        else if (house_height2_8.checked) {
            finalPrice.houseHeight = idx==0 ? houseSquareMeter*300 : houseSquareMeter*200;
        }
    }
    //------------------------

    //тип крыши (цена)
    function roofPrice() {
        if (idx == 0) {
            if (roof1.checked) {
                finalPrice.roofType = houseSquareMeter*1400;
            }
            else if (roof2.checked) {
                finalPrice.roofType = houseSquareMeter*1800;
            }
        }
        else {
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
    }

    roof1.addEventListener('click', ()=> {
        finalPrice.roofType = idx == 0? houseSquareMeter*1400: houseSquareMeter*800;
        getFinalPrice();
    })

    roof2.addEventListener('click', ()=> {
        finalPrice.roofType = idx == 0? houseSquareMeter*1800: houseSquareMeter*1000;
        getFinalPrice();
    })

    if (idx==1) {
            roof3.addEventListener('click', ()=> {
            finalPrice.roofType = houseSquareMeter*1200;
            getFinalPrice();
        })
    }
    //-----------------------------------------------------------------

    // толщина панели (цена)
    function panelThicknessPrice() {
        if (panel1.checked) {
            finalPrice.panelThickness = 0;
        }
        else if (panel2.checked) {
            finalPrice.panelThickness = idx==0? houseSquareMeter*600: houseSquareMeter*300;
        }
    }

    panel1.addEventListener('click', ()=> {
        finalPrice.panelThickness = 0;
        getFinalPrice();
    })

    panel2.addEventListener('click', ()=> {
        finalPrice.panelThickness = idx==0? houseSquareMeter*600: houseSquareMeter*300;
        getFinalPrice();
    })
    //------------------------

    //внутренные перегородки дома (цена)
    function portitionPrice() {
        if (portition1.checked) {
            finalPrice.housePortitions = 0;
        }
        else if (portition2.checked) {
            finalPrice.housePortitions = idx==0? houseSquareMeter*1200: houseSquareMeter*600;
        }
    }

    portition1.addEventListener('click', ()=> {
        finalPrice.housePortitions = 0;
        getFinalPrice();
    })

    portition2.addEventListener('click', ()=> {
        finalPrice.housePortitions = idx==0? houseSquareMeter*1200:houseSquareMeter*600;
        getFinalPrice();
    })
    //------------------------

    //окна (цена)
    wind.addEventListener('keyup', windowPrice);

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
        document.getElementsByClassName('errorMsg2')[idx].innerHTML = error2? errorMsg2 : '';
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
            finalPrice.drainageSystem = idx==0? houseSquareMeter*550: houseSquareMeter*350;
        }
        else {
            finalPrice.drainageSystem = 0;
        }
        getFinalPrice();
    })

    function drainingSystemPrice() {
        if (drainageSystem1.checked) {
            finalPrice.drainageSystem = idx==0? houseSquareMeter*550:houseSquareMeter*350;
        }
        else {
            finalPrice.drainageSystem = 0;
        }
    }
    //-------------------------

    //терраса (цена)
    terrace1.addEventListener('keyup', terracePrice);

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
        document.getElementsByClassName('errorMsg3')[idx].innerHTML = error3? errorMsg3: '';
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

    if (idx==1) {
        frameBeams1.addEventListener('click', ()=>{
            finalPrice.frameBeams = 0;
            getFinalPrice();
        })

        frameBeams2.addEventListener('click', ()=>{
            finalPrice.frameBeams = houseSquareMeter*1200;
            getFinalPrice();
        })
    }
    //----------------------

    //снегозадержатели (цена)
    snowShields1.addEventListener('click', ()=> {
        if (snowShields1.checked) {
            finalPrice.snowShields = idx==0? houseSquareMeter*600: houseSquareMeter*350;
        }
        else {
            //code ...
            finalPrice.snowShields = 0;
        }
        getFinalPrice();
    })

    function snowShieldsPrice() {
        if (snowShields1.checked) {
            finalPrice.snowShields = idx==0? houseSquareMeter*600:houseSquareMeter*350;
        }
        else {
            //code ...
            finalPrice.snowShields = 0;
        }
    }
    //-----------------------------------
    sale.addEventListener('click', ()=>{
        
        if (!(error1 || error2 || error3) && result.innerHTML!='') {   
            result.innerHTML = Math.floor(finalSum - finalSum/20);  
        }

    })


    //Получить всю сумму
    let finalSum;
    function getFinalPrice() {
        let sum = 0;
        const val = house_square_meter.value;
        if (val=='') {
            error1 = true;
            errorMsg1 = 'Заполните поле кв. м';
            house_square_meter.classList.add('error-v');
            document.getElementsByClassName('errorMsg1')[idx].innerHTML = errorMsg1;
        }
        if (!error1 && !error2 && !error3) {
            for (let key in finalPrice) {
                sum+= finalPrice[key];
            }
            finalSum=sum;
            result.innerHTML = sum;
        }
        else {
            result.innerHTML = 'Ошибка!!';
        }
    }

    count++;
}