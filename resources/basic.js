let applyMathFunctions = () => {
    let floor = Math.floor(Number(document.getElementById('floor').innerText));
    let round = Math.round(Number(document.getElementById('round').innerText));
    let ceil = Math.ceil(Number(document.getElementById('ceil').innerText));
    let abs = Math.abs(Number(document.getElementById('abs').innerText));
    let powValues = document.getElementById('pow').innerText.split('^');
    let pow = Math.pow(powValues[0], powValues[1]);

    document.getElementById('floor').innerText = floor;
    document.getElementById('round').innerText = round;
    document.getElementById('ceil').innerText = ceil;
    document.getElementById('abs').innerText = abs;
    document.getElementById('pow').innerText = pow;

}