////create moment object for some date
var someDate = moment('08-19-2015 21.45', 'MM-DD-YYYY HH.mm');

var now = moment();
var durationFromNowToSome = moment.duration({from: now, to: someDate});
//var lastDifference = 0;
//durationFromNowToSome.subtract(1, 'seconds');

//convertion Ms in a form understendable by humans
function getFullTime(duration) {
    return duration.get('years') + ' years ' + 
            duration.get('months') + ' months ' +
            duration.get('days') + ' days ' + 
            duration.get('hours') + ' hours ' +
            duration.get('minutes') + ' minutes ' + 
            duration.get('seconds') + ' seconds';
}

function getSomeDate() {
    var x = document.getElementById("someDate").value;
    someDate = x;
}

//wait for DOM to get loaded
document.addEventListener('DOMContentLoaded', function() { 
    var pElements = document.querySelectorAll('p');
    //var timeElement1 = pElements[0];
    var timeElement2 = pElements[1];
    //var timeElement3 = pElements[2];
    //var timeElement4 = pElements[3];

    var timeFunction = setInterval(function () {
        
        //timeElement1.innerText = 'I\'m subtracting seconds and ' + getFullTime(durationFromNowToSome) + ' left';
        var currentTime = moment();
        var durationFromCurrentToSome = moment.duration({from: currentTime, to: someDate});

        timeElement2.innerText = 'I\'m counting difference and ' + getFullTime(durationFromCurrentToSome) + ' left';

        //difference = durationFromNowToSome - durationFromCurrentToSome;
        //var differenceAcceleration = difference - lastDifference;

        //timeElement3.innerText = 'Difference is ' + difference;
        //timeElement4.innerText = 'Acceleration is ' + differenceAcceleration;

        //lastDifference = difference;
        //durationFromNowToSome.subtract(1, 'seconds');

        if (durationFromCurrentToSome < 0)  {
            clearInterval(timeFunction);
            //change bgcolor here
            timeElement2.className = 'new-color';
            //timeElement2.innerText = ('Today is ' + moment().format('MM-DD-YYYY hh:mm:ss a'));
        } 

    }, 1000);
});



    
