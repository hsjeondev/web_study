let rows = ['전체선택:', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱'];
let colors = ['빨', '주', '노', '초', '파', '남', '보'];
let colorOrders = ['zero', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
let englishColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
let wholeDiv =  document.getElementById('colorFrm');
let children = wholeDiv.children[0];
children.setAttribute('style', 'border: 1px solid black; border-collapse: collapse;');
for(let i = 0; i < rows.length; i++) {
    let tr = document.createElement('tr');

    let titleTd = document.createElement('td');
    titleTd.setAttribute('style', 'border: 1px solid black;  width : 100px; height : 30px; text-align : center; vertical-align : middle;');
    let txt = document.createTextNode(rows[i]);
    titleTd.appendChild(txt);
    tr.appendChild(titleTd);
    children.appendChild(tr);

    let checkboxTd = document.createElement('td');
    // 이후 체크박스 td 크기 지정 여기
    checkboxTd.setAttribute('style', 'border: 1px solid black; width : 270px; height : 30px; text-align : center; vertical-align : middle;');
    for(let j = 0; j < colors.length; j++) {
        // 이후 checkbox 속성 수정 여기
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', colorOrders[i] + '_' + englishColors[j]);

        let label = document.createElement('label');
        label.setAttribute('for', colorOrders[i] + '_' + englishColors[j]);
        let color = document.createTextNode(colors[j]);
        label.appendChild(color);
        checkboxTd.appendChild(checkbox);
        checkboxTd.appendChild(label);
        tr.appendChild(checkboxTd);
    }
}
let targetForm = document.getElementById('colorFrm').children;

let submitButton = document.createElement('button');
let submitBtnTxt = document.createTextNode('submit');
submitButton.setAttribute('id', 'submitButton');
submitButton.appendChild(submitBtnTxt);
let resetButton = document.createElement('button');
let resetBtnTxt = document.createTextNode('reset');
resetButton.setAttribute('id', 'resetButton');
resetButton.appendChild(resetBtnTxt);

let btnsTd = document.createElement('td');
let submitTr = document.createElement('tr');
submitTr.appendChild(submitButton);
let resetTr = document.createElement('tr');
resetTr.appendChild(resetButton);
btnsTd.appendChild(submitTr);
btnsTd.appendChild(resetTr);

targetForm[0].insertAdjacentElement('beforeend', btnsTd);