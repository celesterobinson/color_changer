init(); //run function init

function init() { //creates a function called init that runs 2 functions: placeFirstBtns, and populateSelect.
    placeFirstBtns(); //run function placeFirstBtns
    populateSelect(); //run function populateSelect
}

function populateSelect() { //creates a function called populateSelect that runs a loop through colors array and creates a new option for each color.
    for (var i = 0; i <= colors.length; i++) { //loop runs through each color in color array as long as the i is less than the total number of colors in the list.
        createOption(colors[i]);
    }
}

function placeFirstBtns(){ //creates a function called placeFirstBtns that places buttons on the page on the page start-up
    createButton('blue'); //runs createButton function and creates a new blue button
    createButton('yellow'); //runs createButton function and creates a new yellow button
    createButton('red'); //runs createButton function and creates a new red button
}

function createButton(color) { //creates a function called colorButton that takes a parameter called color
    var button = document.createElement('button') //creates variable called 'button' and assignes a new element called 'button' and assigns it to variable
    button.innerText = color; //changes the text on the button to the parameter entered as color
    button.classList.add(color); //creates a new class called .color and places function in class
    button.classList.add('color-button'); //creates a new class called 'color-button' and places function in class
    button.style.backgroundcolor = color; //makes the backgound color of the button the color passed in as he parameter 
    button.setAttribute("id", color); //assigns each color button created an id of the name of the color
    document.getElementById('color-buttons').appendChild(button); //adds the element 'button' to the div with the id 'color-buttons'
}

function createOption(color) { //creates a function call createOption that creates a new option to go into the select color drop-down.
    var option = document.createElement('option') //creates a new element called option and assigns that element to a variable called option
    option.innerText = color; //changes the text on the option to the name of the color
    option.setAttribute("value", color); //sets the value attribute to the color entered as a parameter. The value is the value from the array.
    document.getElementById('color-selector').appendChild(option); //adds this new option to the drop-down list
}

function addNew() {
    var color = document.getElementById('color-selector').value;
    createButton(color);
}

function matchBackground(color) {
    document.body.style.backgroundcolor = color;
}