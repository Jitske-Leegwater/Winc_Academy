//Dropdown menu
const myDropdown = document.getElementById('myDropdown');
const myButton = document.getElementById('dropbtn')

const dropMenu = function() {
    myDropdown.classList.toggle('show');
}
myButton.addEventListener('click', dropMenu);

//Kleurentoggle
const green = document.getElementById('green');
const grey = document.getElementById('grey');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const purple = document.getElementById('purple');

const wholeBody = document.getElementById('wholeBody');

const colors = [green, grey, yellow, red, blue, purple];

for (const element of colors) {
    element.addEventListener('click', ()=>{     
        wholeBody.classList.remove('green', 'grey', 'yellow', 'red', 'blue', 'purple');
        wholeBody.classList.add(element.classList);
        myDropdown.classList.toggle('show');
    });
};