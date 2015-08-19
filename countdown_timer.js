////create moment object for some date
var futureDate = moment().add(8, 'hours');
var initialDuration = getDurationFromCurrentTo(futureDate);
initialDuration.subtract(1, 'seconds');

//wait for DOM to get loaded
document.addEventListener('DOMContentLoaded', function(event) {
  var pElements = document.querySelectorAll('p');
  var timeElement1 = pElements[0];
  var timeElement2 = pElements[1];
  var timeElement3 = pElements[2];
  var timeElement4 = pElements[3];
  var lastDifference = 0;
  var lastDuration = getDurationFromCurrentTo(futureDate);

  var timeFunctionInterval = setInterval(function onInterval() {
    timeElement1.innerText = 'I\'m subtracting seconds: ' + getFormattedDuration(initialDuration);

    var currentDuration = getDurationFromCurrentTo(futureDate);
    lastDuration = currentDuration;

    //    makeThingsSlow();

    timeElement2.innerText = 'I\'m counting difference: ' + getFormattedDuration(currentDuration);

    var difference = initialDuration - currentDuration;
    var differenceAcceleration = difference - lastDifference;

    timeElement3.innerText = 'Difference is ' + difference;
    timeElement4.innerText = 'Acceleration is ' + differenceAcceleration;

    lastDifference = difference;
    initialDuration.subtract(1, 'seconds');


  }, 1000);
});


function makeThingsSlow() {
  var x = moment();

  var i = 0;
  while (i < (1000 * 1000 * 1100)) {
    i++;
  }

  console.log(moment() - x + 'ms');
}

function getDurationFromCurrentTo(dateTo) {
  return moment.duration({
    from: moment(),
    to: dateTo
  });
}

//convertion Ms in a form understendable by humans
function getFormattedDuration(duration) {
  //return
  //duration.get('years') + ' years ' +
  //duration.get('months') + ' months ' +
  //duration.get('days') + ' days ' +
  return duration.get('hours') + ' hours ' +
    duration.get('minutes') + ' minutes ' +
    duration.get('seconds') + ' seconds';
}
