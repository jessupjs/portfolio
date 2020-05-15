"use strict";

// IIFE
(() => {

    // Get slide, topName
    let slide1El = document.getElementById('slide1');
    let topNameAEl = document.getElementById('topNameA');
    let topNameBEl = document.getElementById('topNameB');

    // Add scroll event listener
    document.addEventListener('scroll',() => {
        // If slide1El is x% near top
        if (-slide1El.getBoundingClientRect().top > window.innerHeight * 0.05) {
            // Swap image visibility
            topNameAEl.style.opacity = '0';
            topNameBEl.style.opacity = '1';
        } else {
            // Swap image visibility
            topNameAEl.style.opacity = '1';
            topNameBEl.style.opacity = '0';
        }
    });

})();