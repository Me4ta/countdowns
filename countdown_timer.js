var secondsNumber = 10;
setTimeout(function () {
    for (i = secondsNumber; i >= 0; i --) {
        document.write("Hey there, " + i + " seconds left till changing backgroud colour ");
    }
}, 1000);
