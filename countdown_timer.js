////create moment object for some date
var someDate = moment('08-14-2015 18.00', 'MM-DD-YYYY HH.mm');

var now = moment();

//get duration in milliseconds between "someDate" and "now" in Ms
var durationInMs = moment.duration({from: now, to: someDate});
var periodDuration = moment.duration(durationInMs);

//convertion Ms in a form understendable by humans
function getFullTime(time) {
    return time.get('years') + ' years ' + 
            time.get('months') + ' months ' +
            time.get('days') + ' days ' + 
            time.get('hours') + ' hours ' +
            time.get('minutes') + ' minutes ' + 
            time.get('seconds') + ' seconds';
}

var timeFunction = setInterval(function () {
    x = document.querySelectorAll("p");
    now = moment();
    durationInMs = moment.duration({from: now, to: someDate});
    periodDuration = moment.duration(durationInMs);

    x[0].innerText = 'Now ' + getFullTime(periodDuration) + ' left';
    //durationInMs -= 1050;

    if (durationInMs < 0)  {
        clearInterval(timeFunction);
        //change bgcolor here
        x[0].className = 'new-color';
        x[0].innerText = ('Today is ' + moment().format('MM-DD-YYYY hh:mm:ss a'));
    } 

}, 1000);

    
