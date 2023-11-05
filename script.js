'use strict';


var colors = ['WHITE','YELLOW','BLUE','PINK','GREEN','VIOLAT','RED'];
var len = colors.length - 1;


var buttonControl = document.getElementById('btn');
var spanControl = document.querySelector('.color');

buttonControl.addEventListener('click',()=>{
    var index = genrateRandomNumber();
    document.body.style.backgroundColor = colors[index];
    spanControl.textContent = colors[index];
})


function genrateRandomNumber()
{
   return Math.round(Math.random() * len);
}