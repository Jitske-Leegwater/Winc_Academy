const myButton = document.getElementById('mybutton');
const btnChangeColor = document.getElementById("mybutton2");

const clickButton = function(){
    alert('button clicked');
};
myButton.addEventListener('click', clickButton);


// const ChangeColor = function(){
//     btnChangeColor.parentElement.classList.add('red-background');
// };
// btnChangeColor.addEventListener('click', ChangeColor);

const ToggleColor = function(){
    btnChangeColor.parentElement.classList.toggle('red-background');
};
btnChangeColor.addEventListener('click', ToggleColor);
