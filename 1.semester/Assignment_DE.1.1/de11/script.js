'use strict'

// alias for UL of secrets
let list = document.getElementById("secrets");
// alias for button to reveal secrets
let revealBtn = document.getElementById("revealSecret");
// Array of secrets
let secrets = [
    "I really like food, as in i can't get enough of it",
    "test",
    "testing again"
];
// alias LI tags in UL
let secret = document.querySelector(".secret");


// reveal a secret function
const reveal = function(){
    for (let i = 0; i < secrets.length; i++){
        console.log('test');
        // create a new li
        let newLI = document.createElement["li"];
        
        // add text from the secrets array to newSecret
        newSecret = document.createTextNode(secrets[i]);
        // append new child to the 
        newLI.appendChild(newSecret);
    }
       
  
}

// on click of button, add a secret to the list
revealBtn.addEventListener('click', reveal);

