let inTemp = document.getElementById('inTemp');
let inCel = document.getElementById('inCel');
let inFah = document.getElementById('inFah');
let btnCon = document.getElementById('btnCon');
let btnReset = document.getElementById('btnReset');
let cbFahrenheit = document.getElementById('cbFahrenheit');
let cbCelsius = document.getElementById('cbCelsius');
let alert = document.getElementById('alert');

btnCon.addEventListener('click', function (e) {
    if (inTemp.value == "") {
        TmpCvtr.inFah.value = (inTemp.value * 9 / 5) + 32 + (' \xB0F');
        TmpCvtr.inCel.value = (inTemp.value - 32) * 5 / 9 + (' \xB0C');
    }
    if(!cbFahrenheit.checked && !cbCelsius.checked && !cbKelvin.checked){
        alert.innerHTML = 'Check Unit!'
    }else{
        alert.innerHTML = '';
    }
    switch (true) {
        case cbFahrenheit.checked:
            TmpCvtr.inCel.value = (inTemp.value - 32) * 5 / 9 + (' \xB0C');
            TmpCvtr.inKel.value = ((inTemp.value - 32) * 5 / 9) + 273.15 + (' K');
            TmpCvtr.inFah.value = inTemp.value + (' \xB0F');
            break;
        case cbCelsius.checked:
            TmpCvtr.inFah.value = (inTemp.value * 9 / 5) + 32 + (' \xB0F');
            TmpCvtr.inKel.value = inTemp.value * 1 + 273.15 + (' K');
            TmpCvtr.inCel.value = inTemp.value + (' \xB0C');
            break;
        default:
            break;
    }
});

function checkChange(obj) {
    for (var i = 0; i < ckBox.length; i++) {
        ckBox[i].checked = false;
    }
    obj.checked = true;
}