function oneFloor() {
    let houseSquareMeter1 = 0;     // квадрат метр дома

    const finalPrice1={
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

    const result1 = document.getElementById('result.1');
    const house_square_meter1 = document.getElementById('houseSquareMeter1'); 

    const house_height2_5_1 = document.getElementById('height.1-2.5');
    const house_height2_8_1 = document.getElementById('height.1-2.8');

    const roof1_1 = document.getElementById('roof.1-1');
    const roof2_1 = document.getElementById('roof.1-2');
    //const roof3_1 = document.getElementById('roof.1-3');

    const panel1_1 = document.getElementById('panel.1-1');
    const panel2_1 = document.getElementById('panel.1-2');

    const portition1_1 = document.getElementById('portition.1-1');
    const portition2_1 = document.getElementById('portition.1-2');

    const wind_1 = document.getElementById('wind1');

    const decoration1_1 = document.getElementById('decoration.1-1');
    const decoration2_1 = document.getElementById('decoration.1-2');
    const decoration3_1 = document.getElementById('decoration.1-3');

    const drainageSystem1_1 = document.getElementById('drainage-system1');

    const terrace1_1 = document.getElementById('terrace1');

    // const frameBeams1_1 = document.getElementById('frame-beams.1-1');
    // const frameBeams2_1 = document.getElementById('frame-beams.1-2');

    const snowShields1_1 = document.getElementById('snow-shields1');

    //----------------------------------------------------------------

    house_square_meter1.addEventListener('change', getPrice1);
    house_square_meter1.addEventListener('keyup', getPrice1);


    function getPrice1() {

        houseSquareMeter1 = parseInt(house_square_meter1.value);
        //console.log(houseSquareMeter);
        if (isNaN(houseSquareMeter1)) {
            finalPrice1.price = 0;
            //console.log(finalPrice.price);
        }
        else {
            houseSquarePrice1();
            houseHeightPrice1();
            roofPrice1();
            panelThicknessPrice1();
            portitionPrice1();
            decorationPrice1();
            drainingSystemPrice1();
            //frameBeamsPrice1();
            snowShieldsPrice1();
        }
        getFinalPrice1();
    }

    //квадрат метр дома (цена)
    function houseSquarePrice1() {
        if (houseSquareMeter1<=99) {
            finalPrice1.price=houseSquareMeter1*12500
        }
        else if (houseSquareMeter1>=100 && houseSquareMeter1<=120) {
            finalPrice1.price=houseSquareMeter1*12000
        }
        else if (houseSquareMeter1>=121 && houseSquareMeter1<=130) {
            finalPrice1.price=houseSquareMeter1*11500
        }
        else if (houseSquareMeter1>=131){
            finalPrice1.price=houseSquareMeter1*11000
        }
    }
    // --------------------------

    //высота этажа (цена)
    house_height2_5_1.addEventListener('click', ()=> {
        finalPrice1.houseHeight = 0;
        getFinalPrice1();
    })

    house_height2_8_1.addEventListener('click', ()=> {
        finalPrice.houseHeight = houseSquareMeter1*300;
        getFinalPrice1();
    })

    function houseHeightPrice1() {
        if (house_height2_5_1.checked) {
            finalPrice1.houseHeight = 0;
        }
        else if (house_height2_8_1.checked) {
            finalPrice1.houseHeight = houseSquareMeter1*300;
        }
    }
    //------------------------

    //тип крыши (цена)
    function roofPrice1() {
        if (roof1_1.checked) {
            finalPrice1.roofType = houseSquareMeter1*1400;
        }
        else if (roof2.checked) {
            finalPrice1.roofType = houseSquareMeter1*1800;
        }
        // else if (roof3.checked) {
        //     finalPrice.roofType = houseSquareMeter*1200;
        // }
    }

    roof1_1.addEventListener('click', ()=> {
        finalPrice1.roofType = houseSquareMeter1*1400;
        getFinalPrice1();
    })

    roof2_1.addEventListener('click', ()=> {
        finalPrice1.roofType = houseSquareMeter1*1800;
        getFinalPrice1();
    })

    // roof3.addEventListener('click', ()=> {
    //     finalPrice.roofType = houseSquareMeter*1200;
    //     getFinalPrice();
    // })
    //------------------------

    // толщина панели (цена)
    function panelThicknessPrice1() {
        if (panel1_1.checked) {
            finalPrice1.panelThickness = 0;
        }
        else if (panel2_1.checked) {
            finalPrice1.panelThickness = houseSquareMeter1*600;
        }
    }

    panel1_1.addEventListener('click', ()=> {
        finalPrice1.panelThickness = 0;
        getFinalPrice1();
    })

    panel2_1.addEventListener('click', ()=> {
        finalPrice1.panelThickness = houseSquareMeter1*600;
        getFinalPrice1();
    })
    //------------------------

    //внутренные перегородки дома (цена)
    function portitionPrice1() {
        if (portition1_1.checked) {
            finalPrice1.housePortitions = 0;
        }
        else if (portition2_1.checked) {
            finalPrice1.housePortitions = houseSquareMeter1*1200;
        }
    }

    portition1_1.addEventListener('click', ()=> {
        finalPrice1.housePortitions = 0;
        getFinalPrice1();
    })

    portition2_1.addEventListener('click', ()=> {
        finalPrice1.housePortitions = houseSquareMeter1*1200;
        //console.log(finalPrice.housePortitions);
        getFinalPrice1();
    })
    //------------------------

    //окна (цена)
    wind1.addEventListener('keyup', windowPrice1);
    wind1.addEventListener('change', windowPrice1);

    function windowPrice1() {
        const val = parseInt(wind1.value);
        if (isNaN(val) || val == 0) {
            finalPrice1.windowCount = 0;
        }
        else {
            finalPrice1.windowCount = val*8000;
        }
        getFinalPrice1();
    }
    //---------------------------

    //внешная отделка дома (цена)
    let dec1Checked1 = true;
    let dec2Checked1 = true;
    let dec3Checked1 = true;
    decoration1_1.addEventListener('click', ()=>{
        if (dec1Checked1) {
            finalPrice1.homeDecoration = houseSquareMeter1*1500;
            dec1Checked1 = false;
            dec2Checked1 = true;
            dec3Checked1 = true;
        }
        else {
            decoration1_1.checked = false;
            dec1Checked1 = true;
            finalPrice1.homeDecoration = 0;
        }
        getFinalPrice1();
    });

    decoration2_1.addEventListener('click', ()=>{
        if (dec2Checked1) {
            finalPrice1.homeDecoration = houseSquareMeter1*1700;
            dec2Checked1 = false;
            dec1Checked1 = true;
            dec3Checked1 = true;
        }
        else {
            decoration2_1.checked = false;
            dec2Checked1 = true;
            finalPrice1.homeDecoration = 0;
        }
        getFinalPrice1();
    });

    decoration3_1.addEventListener('click', ()=>{
        if (dec3Checked1) {
            finalPrice1.homeDecoration = houseSquareMeter1*4200;
            dec3Checked1 = false;
            dec1Checked1 = true;
            dec2Checked1 = true;
        }
        else {
            decoration3_1.checked = false;
            dec3Checked1 = true;
            finalPrice1.homeDecoration = 0;
        }
        getFinalPrice1();
    })

    function decorationPrice1() {
        if (decoration1_1.checked) {
            finalPrice1.homeDecoration = houseSquareMeter1*1500;
        }
        else if (decoration2_1.checked) {
            finalPrice1.homeDecoration = houseSquareMeter1*1700;
        }
        else if (decoration3_1.checked) {
            finalPrice1.homeDecoration = houseSquareMeter1*4200;
        }
    }
    //--------------------------

    //Водосточная система (цена)
    drainageSystem1_1.addEventListener('click', ()=> {
        if (drainageSystem1_1.checked) {
            finalPrice1.drainageSystem = houseSquareMeter1*550;
        }
        else {
            finalPrice1.drainageSystem = 0;
        }
        getFinalPrice1();
    })

    function drainingSystemPrice1() {
        if (drainageSystem1_1.checked) {
            finalPrice1.drainageSystem = houseSquareMeter1*550;
        }
        else {
            finalPrice1.drainageSystem = 0;
        }
    }
    //-------------------------

    //терраса (цена)
    terrace1_1.addEventListener('keyup', terracePrice1);
    terrace1_1.addEventListener('change', terracePrice1);

    function terracePrice1(){
        const val = parseInt(terrace1_1.value);
        if (isNaN(val) || val == 0) {
            finalPrice1.terrace = 0;
        }
        else {
            finalPrice1.terrace = val*3000;
        }
        getFinalPrice1();
    }
    //-----------------------

    //каркасное балки (цена)
    // function frameBeamsPrice1() {
    //     if (frameBeams1_1.checked) {
    //         finalPrice1.frameBeams = 0;
    //     }
    //     else if (frameBeams2_1.checked) {
    //         finalPrice1.frameBeams = houseSquareMeter1*1200;
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
    snowShields1_1.addEventListener('click', ()=> {
        if (snowShields1_1.checked) {
            finalPrice1.snowShields = houseSquareMeter1*600;
        }
        else {
            //code ...
            finalPrice1.snowShields = 0;
        }
        getFinalPrice1();
    })

    function snowShieldsPrice1() {
        if (snowShields1_1.checked) {
            finalPrice1.snowShields = houseSquareMeter1*600;
        }
        else {
            //code ...
            finalPrice1.snowShields = 0;
        }
    }

    //----------------------

    function getFinalPrice1() {
        let sum = 0;
        if (finalPrice1.price!=0) {
            for (let key in finalPrice1) {
                sum+= finalPrice1[key];
            }
            result1.innerHTML = sum;
        }
        else {
            result1.innerHTML = 'Сперва заполните поле кв. м. !!!';
        }
    }
}




 