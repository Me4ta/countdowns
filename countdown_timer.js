var secondsNumber = 10;
for (i = secondsNumber; i >= 0; i --) {
    setTimeout(function () {
        document.write("Hey there, " + i + " seconds left till changing backgroud colour ");
    }, 1000);
}
