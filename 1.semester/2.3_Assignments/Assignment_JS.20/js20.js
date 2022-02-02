'use strict'

let leapYear = function(){
    // prompt a year
    let year = Number(window.prompt('Write a year'));
    // if true, write true
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log('Your input year was ' + year + '. ' + 'True, this year is/was leap-year.');
        // else write false
    }else{
            console.log('Your input year was ' + year + '. ' + 'False, this year is/was NOT a leap-year.');
        }
    };

document.querySelector(".addYear").addEventListener('click', leapYear);

let checkCpr = function(){
    // prompt a cpr number
    let cpr = Number(window.prompt('Write a CPR valid number (10-digits)'));
    // if true, write female
    if(cpr % 2 == 0){ // if the entire number is dividable by 2 and theres no remainders, its a woman
        console.log('The person holding the CPR number you put in, ' + cpr + ' is a female');
    // else write male
    }else{
            console.log('The person holding the CPR number you put in, ' + cpr + ' is a male');
        }
    };

document.querySelector(".checkCpr").addEventListener('click', checkCpr);
