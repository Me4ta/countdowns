var secondsNumber = 3;
var i = secondsNumber;
var timeFunction = setInterval(function () {
    //document.body.innerText = ("Hey there, " + i + " seconds left till changing backgroud colour ");
    var x = document.querySelectorAll("p");
    x[0].innerText = 'Hey there, ' + i + ' seconds left till changing backgroud colour';
    i--;
    if (i == -1) {
        clearInterval(timeFunction);
        //change bgcolor here
        x[0].className = 'new-color';
        x[0].innerText = ('Today is ' + moment().format('MMMM Do YYYY'));
    } 
}, 1000);

    
