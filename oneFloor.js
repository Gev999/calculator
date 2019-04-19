let count1 = 0;
function oneFloor() {
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
        //frameBeams: 0,           // каркасное балки
        snowShields: 0,          // снегозадержатели

    };

    const result = document.getElementById('result1');
    const house_square_meter = document.getElementById('houseSquareMeter1');

    const house_height2_5 = document.getElementById('height1-2_5');
    const house_height2_8 = document.getElementById('height1-2_8');

    const roof1 = document.getElementById('roof1-1');
    const roof2 = document.getElementById('roof1-2');
    //const roof3_1 = document.getElementById('roof.1-3');

    const panel1 = document.getElementById('panel1-1');
    const panel2 = document.getElementById('panel1-2');

    const portition1 = document.getElementById('portition1-1');
    const portition2 = document.getElementById('portition1-2');

    const wind = document.getElementById('wind1');

    const decoration1 = document.getElementById('decoration1-1');
    const decoration2 = document.getElementById('decoration1-2');
    const decoration3 = document.getElementById('decoration1-3');

    const drainageSystem1 = document.getElementById('drainage-system1');

    const terrace1 = document.getElementById('terrace1');

    // const frameBeams1_1 = document.getElementById('frame-beams.1-1');
    // const frameBeams2_1 = document.getElementById('frame-beams.1-2');

    const snowShields1 = document.getElementById('snow-shields1');

    const sale1 = document.getElementById('sale1');

    //----------------------------------------------------------------

    //set default values
    if (count1 > 0) {
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
        document.getElementById('errorMsg1-1').innerHTML = '';
        document.getElementById('errorMsg2-1').innerHTML = '';
        document.getElementById('errorMsg3-1').innerHTML = '';
        house_square_meter.classList.remove('error-v');
        wind1.classList.remove('error-v');
        terrace1.classList.remove('error-v');

        count1 = 0;
    }

    //house_square_meter.addEventListener('change', getPrice1);
    house_square_meter.addEventListener('keyup', getPrice1);

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

    function getPrice1() {

        houseSquareMeter = house_square_meter.value;
        errorMsg1 = checkNumber(houseSquareMeter, 80);
        if (errorMsg1=='') {
            houseSquarePrice1();
            houseHeightPrice1();
            roofPrice1();
            panelThicknessPrice1();
            portitionPrice1();
            decorationPrice1();
            drainingSystemPrice1();
            //frameBeamsPrice1();
            snowShieldsPrice1();
            error1 = false;
            a=0;
        }
        else {
            error1 = true;
        }
        document.getElementById('errorMsg1-1').innerHTML = errorMsg1;
        if (error1) {
            house_square_meter.classList.add('error-v');
        }
        else {
            house_square_meter.classList.remove('error-v');
        }
        getFinalPrice1();
    }

    //квадрат метр дома (цена)
    function houseSquarePrice1() {
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
    // --------------------------

    //высота этажа (цена)
    house_height2_5.addEventListener('click', ()=> {
        finalPrice.houseHeight = 0;
        getFinalPrice1();
    })

    house_height2_8.addEventListener('click', ()=> {
        finalPrice.houseHeight = houseSquareMeter*300;
        getFinalPrice1();
    })

    function houseHeightPrice1() {
        if (house_height2_5.checked) {
            finalPrice.houseHeight = 0;
        }
        else if (house_height2_8.checked) {
            finalPrice.houseHeight = houseSquareMeter*300;
        }
    }
    //------------------------

    //тип крыши (цена)
    function roofPrice1() {
        if (roof1.checked) {
            finalPrice.roofType = houseSquareMeter*1400;
        }
        else if (roof2.checked) {
            finalPrice.roofType = houseSquareMeter*1800;
        }
        // else if (roof3.checked) {
        //     finalPrice.roofType = houseSquareMeter*1200;
        // }
    }

    roof1.addEventListener('click', ()=> {
        finalPrice.roofType = houseSquareMeter*1400;
        getFinalPrice1();
    })

    roof2.addEventListener('click', ()=> {
        finalPrice.roofType = houseSquareMeter*1800;
        getFinalPrice1();
    })

    // roof3.addEventListener('click', ()=> {
    //     finalPrice.roofType = houseSquareMeter*1200;
    //     getFinalPrice();
    // })
    //------------------------

    // толщина панели (цена)
    function panelThicknessPrice1() {
        if (panel1.checked) {
            finalPrice.panelThickness = 0;
        }
        else if (panel2.checked) {
            finalPrice.panelThickness = houseSquareMeter*600;
        }
    }

    panel1.addEventListener('click', ()=> {
        finalPrice.panelThickness = 0;
        getFinalPrice1();
    })

    panel2.addEventListener('click', ()=> {
        finalPrice.panelThickness = houseSquareMeter*600;
        getFinalPrice1();
    })
    //------------------------

    //внутренные перегородки дома (цена)
    function portitionPrice1() {
        if (portition1.checked) {
            finalPrice.housePortitions = 0;
        }
        else if (portition2.checked) {
            finalPrice.housePortitions = houseSquareMeter*1200;
        }
    }

    portition1.addEventListener('click', ()=> {
        finalPrice.housePortitions = 0;
        getFinalPrice1();
    })

    portition2.addEventListener('click', ()=> {
        finalPrice.housePortitions = houseSquareMeter*1200;
        //console.log(finalPrice.housePortitions);
        getFinalPrice1();
    })
    //------------------------

    //окна (цена)
    wind.addEventListener('keyup', windowPrice1);
    //wind.addEventListener('change', windowPrice1);

    function windowPrice1() {
        const val = wind1.value;
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
        document.getElementById('errorMsg2-1').innerHTML = error2? errorMsg2 : '';
        if (error2) {
            wind1.classList.add('error-v');
        }
        else {
            wind1.classList.remove('error-v');
        }
        getFinalPrice1();
    }
    //---------------------------

    //внешная отделка дома (цена)
    let dec1Checked1 = true;
    let dec2Checked1 = true;
    let dec3Checked1 = true;
    decoration1.addEventListener('click', ()=>{
        if (dec1Checked1) {
            finalPrice.homeDecoration = houseSquareMeter*1500;
            dec1Checked1 = false;
            dec2Checked1 = true;
            dec3Checked1 = true;
        }
        else {
            decoration1.checked = false;
            dec1Checked1 = true;
            finalPrice.homeDecoration = 0;
        }
        getFinalPrice1();
    });

    decoration2.addEventListener('click', ()=>{
        if (dec2Checked1) {
            finalPrice.homeDecoration = houseSquareMeter*1700;
            dec2Checked1 = false;
            dec1Checked1 = true;
            dec3Checked1 = true;
        }
        else {
            decoration2.checked = false;
            dec2Checked1 = true;
            finalPrice.homeDecoration = 0;
        }
        getFinalPrice1();
    });

    decoration3.addEventListener('click', ()=>{
        if (dec3Checked1) {
            finalPrice.homeDecoration = houseSquareMeter*4200;
            dec3Checked1 = false;
            dec1Checked1 = true;
            dec2Checked1 = true;
        }
        else {
            decoration3.checked = false;
            dec3Checked1 = true;
            finalPrice.homeDecoration = 0;
        }
        getFinalPrice1();
    })

    function decorationPrice1() {
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
            finalPrice.drainageSystem = houseSquareMeter*550;
        }
        else {
            finalPrice.drainageSystem = 0;
        }
        getFinalPrice1();
    })

    function drainingSystemPrice1() {
        if (drainageSystem1.checked) {
            finalPrice.drainageSystem = houseSquareMeter*550;
        }
        else {
            finalPrice.drainageSystem = 0;
        }
    }
    //-------------------------

    //терраса (цена)
    terrace1.addEventListener('keyup', terracePrice1);
    //terrace1.addEventListener('change', terracePrice1);

    function terracePrice1(){
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
        document.getElementById('errorMsg3-1').innerHTML = error3? errorMsg3: '';
        if (error3) {
            terrace1.classList.add('error-v');
        }
        else {
            terrace1.classList.remove('error-v');
        }
        getFinalPrice1();
    }
    //-----------------------

    //каркасное балки (цена)
    // function frameBeamsPrice1() {
    //     if (frameBeams1_1.checked) {
    //         finalPrice.frameBeams = 0;
    //     }
    //     else if (frameBeams2_1.checked) {
    //         finalPrice.frameBeams = houseSquareMeter*1200;
    //     }
    // }

    // frameBeams1.addEventListener('click', ()=>{
    //     finalPrice.frameBeams = 0;
    //     getFinalPrice();
    // })

    // frameBeams2.addEventListener('click', ()=>{
    //     finalPrice.frameBeams = houseSquareMeter*1200;
    //     getFinalPrice();
    // })
    //----------------------

    //снегозадержатели (цена)
    snowShields1.addEventListener('click', ()=> {
        if (snowShields1.checked) {
            finalPrice.snowShields = houseSquareMeter*600;
        }
        else {
            //code ...
            finalPrice.snowShields = 0;
        }
        getFinalPrice1();
    })

    function snowShieldsPrice1() {
        if (snowShields1.checked) {
            finalPrice.snowShields = houseSquareMeter*600;
        }
        else {
            //code ...
            finalPrice.snowShields = 0;
        }
    }
    let a=0;

    sale1.addEventListener('click', ()=>{
      result.innerHTML = (finalSum1-finalSum1/20);

    })


    //----------------------
    let finalSum1;
    function getFinalPrice1() {
        let sum = 0;
        const val = house_square_meter.value;
        if (val=='') {
            error1 = true;
            errorMsg1 = 'Заполните поле кв. м';
            house_square_meter.classList.add('error-v');
            document.getElementById('errorMsg1-1').innerHTML = errorMsg1;
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

    count1++;
}
