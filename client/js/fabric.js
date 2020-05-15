"use strict";

// IIFE
(() => {

    // Get els
    const slide1 = document.getElementById('slide1');
    const pattern1A = document.getElementById('patternAi');
    const pattern1B = document.getElementById('patternAii');
    const pattern2A = document.getElementById('patternBi');
    const pattern2B = document.getElementById('patternBii');
    const pattern3A = document.getElementById('patternCi');
    const pattern3B = document.getElementById('patternCii');
    const pattern4A = document.getElementById('patternDi');
    const pattern4B = document.getElementById('patternDii');

    // On load
    managePos();

    // Add scroll event listener
    document.addEventListener('scroll',() => {
        managePos(pattern1A, pattern1B, 3, 3);
        managePos(pattern2A, pattern2B, 4, 4);
        managePos(pattern3A, pattern3B, 3, 3);
        managePos(pattern4A, pattern4B, 1, 1);
    });

    /*
    managePos
     */
    function managePos(pA, pB, sX, sY) {
        const pos = slide1.getBoundingClientRect();
        if (pos.top <= 0 && pos.top >= -pos.height ) {
            const pct = (-pos.top / pos.height * 100).toFixed(1);
            requestAnimationFrame(() => {
                if (pA && pB) {
                    pA.style.backgroundPositionX = `${pct * sX}%`;
                    pB.style.backgroundPositionX = `${pct * sX}%`;
                    pA.style.backgroundPositionY = `${100 - pct * sY}%`;
                    pB.style.backgroundPositionY = `${-pct * sY}%`;
                }
            });
        }
    }


})();