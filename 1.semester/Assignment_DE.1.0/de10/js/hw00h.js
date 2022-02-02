'use strict';

const go = function () {
    let targets = document.getElementsByClassName('title');
    for(let i = 0; i < targets.length; ++i) {
        targets[i].innerHTML = 'Hello, World!';
    }
}

window.addEventListener('load', go);
