////create moment object for some date
var someDate = moment('08-14-2015 18.00', 'MM-DD-YYYY HH.mm');

var now = moment();
var durationFromNowToSome = moment.duration({from: now, to: someDate});


//convertion Ms in a form understendable by humans
function getFullTime(duration) {
    return duration.get('years') + ' years ' + 
            duration.get('months') + ' months ' +
            duration.get('days') + ' days ' + 
            duration.get('hours') + ' hours ' +
            duration.get('minutes') + ' minutes ' + 
            duration.get('seconds') + ' seconds';
}

//wait for DOM to get loaded
document.addEventListener('DOMContentLoaded', function(event) { 
    var pElements = document.querySelectorAll('p');
    var timeElement1 = pElements[0];
    var timeElement2 = pElements[1];
    var timeElement3 = pElements[2];

    var timeFunction = setInterval(function () {
        
        timeElement1.innerText = 'I\'m subtracting seconds and ' + getFullTime(durationFromNowToSome) + ' left';
        

        currentTime = moment();
        durationFromCurrentToSome = moment.duration({from: currentTime, to: someDate});

        timeElement2.innerText = 'I\'m counting difference and ' + getFullTime(durationFromCurrentToSome) + ' left';

        difference = durationFromNowToSome - durationFromCurrentToSome;

        timeElement3.innerText = 'Difference ' + difference;

        durationFromNowToSome.subtract(1, 'seconds');

        if (durationFromNowToSome < 0)  {
            clearInterval(timeFunction);
            //change bgcolor here
            timeElement1.className = 'new-color';
            timeElement1.innerText = ('Today is ' + moment().format('MM-DD-YYYY hh:mm:ss a'));
        } 

    }, 1000);
});



    
