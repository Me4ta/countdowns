var secondsNumber = 3;
var i = secondsNumber;
setInterval(function () {
    document.body.innerHTML = ("Hey there, " + i + " seconds left till changing backgroud colour ");
    i--;
}, 1000);
    
