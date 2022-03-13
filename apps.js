'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    const newLocal = 'light-theme';
    if(className == newLocal) {
        this.textContent - "Mudar";
    }
    else {
        this.textContent = "Mudar";
    }
    console.log(`current class name: ${className}`);
});
