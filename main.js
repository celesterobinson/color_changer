init();

function init(){
    placeFirstBtns();
    populateSelect();
}

function populateSelect(){
    for (var i = 0; i <= colors.length; i++) {
        createOption(colors[i]);
    }
}

function placeFirstBtns(){
    createButton('blue');
    createButton('yellow');
    createButton('red');
}

function createButton(color) {
    var button = document.createElement('button')
    button.innerText = color;
    button.classList.add(color);
    button.classList.add('color-button');
    button.style.backgroundColor = color;
    button.setAttribute("id", color);
    button.onclick = function matchBackground() {
        document.body.style.backgroundColor = color;
    }
    document.getElementById('color-buttons').appendChild(button);
}

function createOption(color) {
    var option = document.createElement('option')
    option.innerText = color;
    option.setAttribute("value", color);
    document.getElementById('color-selector').appendChild(option);
    //Trying to remove options from array if there is already a button created for them
}

function addNewBtn() {
    var color = document.getElementById('color-selector').value;
    if (document.getElementById(color)) {
        alert('That color button has already been created. Please select another.')
    } else {
        createButton(color);
    }
}

function removeCurrent() {
    var currColor = document.body.style.backgroundColor;
    var parent = document.getElementById('color-buttons');
    var children = parent.childNodes;
    var btnToRemove = document.getElementById(currColor);
    parent.removeChild(btnToRemove);
    document.body.style.backgroundColor = 'black';    
}

function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}