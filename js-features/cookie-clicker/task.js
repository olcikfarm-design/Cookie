const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speedElement = document.getElementById('clicker__speed');

let count = 0;                 
let isShrunk = false;         
let lastClickTime = 0;         
const initialWidth = cookie.width || 200;
const initialHeight = cookie.height || initialWidth;

cookie.onclick = function() {
    
    count++;
    counter.textContent = count;

    if (!isShrunk) {
        cookie.width = initialWidth - 50;
        cookie.height = initialHeight - 50;
        isShrunk = true; 
    } else {
        cookie.width = initialWidth;
        cookie.height = initialHeight;
        isShrunk = false; 
    }

    
    const currentTime = Date.now(); 
    
    if (lastClickTime > 0) {
        const timeDiffInSeconds = (currentTime - lastClickTime) / 1000;
        
        const speed = 1 / timeDiffInSeconds;
        
        speedElement.textContent = speed.toFixed(2);
    }
    
    lastClickTime = currentTime;
};