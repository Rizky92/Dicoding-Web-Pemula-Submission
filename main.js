document.addEventListener('DOMContentLoaded', function (e) {
    let dataText = ["This is my PortFolio.", "Welcome to My PortFolio.", "The PortFolio of Me.", "I am in misery."];

    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to element
            document.querySelector("[typewriter]").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="caret"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 200);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 5000);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 5000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});