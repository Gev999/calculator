window.onload = ()=> {
    const floor1 = document.getElementById('one-floor');
    const floor2 = document.getElementById('two-floor');
    let oneChecked = false;
    let twoChecked = false;

    document.getElementById('one_floor').addEventListener('click', ()=> {
        if (!oneChecked) {
            oneChecked = true;
            twoChecked = false;
            floor1.style.display = "block";
            floor2.style.display = "none";
            floorPrice(0);
        }
    });

    document.getElementById('two_floor').addEventListener('click', ()=> {
        if (!twoChecked) {
            twoChecked = true;
            oneChecked = false;
            floor2.style.display = "block";
            floor1.style.display = "none";
            floorPrice(1);
        }
    });
}
