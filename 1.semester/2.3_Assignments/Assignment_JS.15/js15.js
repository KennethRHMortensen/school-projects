'use strict'

let insertTemp = function(){
    let fahr = Number(window.prompt('Write a number'));
    let celc = 5/9 * (fahr-32); 
    console.log('Your input-temperature was ' + fahr + ' degrees fahrenheit.' + ' ' + 'When converted to celcius, that would be ' + celc + ' degrees celcius.');
}

document.querySelector(".addTemp").addEventListener('click', insertTemp);


