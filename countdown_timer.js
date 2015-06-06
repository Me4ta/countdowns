var secondsNumber = 3;
var i = secondsNumber;
var timeFunction = setInterval(function () {
    document.body.innerHTML = ("Hey there, " + i + " seconds left till changing backgroud colour ");
    i--;
    if (i == -1) {
        clearInterval(timeFunction);
    } 
}, 1000);

    
