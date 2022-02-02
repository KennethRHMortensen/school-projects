'use strict'

// create $ shortkey for document.getElementById
const $ = function (foo) {
    return document.getElementById(foo);
};

// alias
const vatForm = $('vatForm');


// calculate VAT from inputs
function calcVat(e) {
    
    // prevent the default behavior of a form 
    e.preventDefault();
    
    const vat = $('vatAmount').value -0;
    const addVat = $('addVat').value -0;
    const subVat = $('subVat').value -0;
    const calcVat = $('calcVat').value -0;

    console.log('the given VAT in % is', vat);

    // calculate the input amount including VAT 
    let addedVat = addVat + (addVat*vat)/100;
    console.log('the total amount including VAT is', addedVat);
    
    // calculate the input amount excluding VAT
    let subbedVat = subVat - (subVat*vat)/100;
    console.log('the total amount with VAT excluded is', subbedVat);

    // calculate 
    let calcedVat = calcVat * (vat/100)
    console.log('the amount that the VAT equals to is', calcedVat);
    
    // print the results
    $('vatInclude').innerHTML = addedVat + ' DKK';
    $('vatExclude').innerHTML = subbedVat + ' DKK';
    $('vatValue').innerHTML = calcedVat + ' DKK';
};

// run function on submit of form
vatForm.addEventListener('submit', calcVat);