
//convertion Ms in a form understendable by humans
function getFullTime(duration) {
    var finalTime = '';
    var timeElementsToShow = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
    var time = '';
    for (time in timeElementsToShow) {
        if (duration.get(timeElementsToShow[time]) > 0 || timeElementsToShow[time] === 'minutes' || timeElementsToShow[time] === 'seconds') {
            //console.log(timeElementsToShow[time]);
            finalTime += duration.get(timeElementsToShow[time]) + ' ' + timeElementsToShow[time] + ' ';
        }
    };
    return finalTime;
    // duration.get('years') + ' years ' + 
    //         duration.get('months') + ' months ' +
    //         duration.get('days') + ' days ' + 
    //         duration.get('hours') + ' hours ' +
    //         duration.get('minutes') + ' minutes ' + 
    //         duration.get('seconds') + ' seconds';
}

function getSomeDate() {
    //create moment object for some date
    var x = document.getElementById("someDate").value;
    var someDate = x;
    var now = moment();
    var durationFromNowToSome = moment.duration({from: now, to: someDate}); 
    var pElements = document.querySelectorAll('p');
    var timeElement2 = pElements[1];

    var timeFunction = setInterval(function () {  
            
        var currentTime = moment();
        var durationFromCurrentToSome = moment.duration({from: currentTime, to: someDate});
        timeElement2.innerText = 'I\'m counting difference and ' + getFullTime(durationFromCurrentToSome) + ' left';

        if (durationFromCurrentToSome < 0)  {
            clearInterval(timeFunction);
            //change bgcolor here
            timeElement2.className = 'new-color';
        } 
    }, 1000);
};



    
