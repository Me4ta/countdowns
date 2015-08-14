////create moment object for some date
var someDate = moment('08-14-2015 18.00', 'MM-DD-YYYY HH.mm');

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
    var timeElement = pElements[0];

    var timeFunction = setInterval(function () {
        var now = moment();
        var durationFromNowToSome = moment.duration({from: now, to: someDate});
        
        timeElement.innerText = 'Now ' + getFullTime(durationFromNowToSome) + ' left';

        if (durationFromNowToSome < 0)  {
            clearInterval(timeFunction);
            //change bgcolor here
            timeElement.className = 'new-color';
            timeElement.innerText = ('Today is ' + moment().format('MM-DD-YYYY hh:mm:ss a'));
        } 

    }, 1000);
});



    
