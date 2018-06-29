(function () {
    "use strict";
    var timeElement = document.getElementsByClassName("stats__count")
    var countDownDate = new Date("Dec 08, 2018 00:00:00").getTime();
    var countDown = function(){
        var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            timeElement[0].innerHTML=days;
            timeElement[1].innerHTML=hours;
            timeElement[2].innerHTML=minutes;
            timeElement[3].innerHTML=seconds;
            if (distance < 0) {
                clearInterval(x);
                timeElement[0].innerHTML="00";
                timeElement[1].innerHTML="00";
                timeElement[2].innerHTML="00";
                timeElement[3].innerHTML="00";
            }
    }

    countDown();           
    var x = setInterval(function() {
                countDown();
    }, 1000);
})();
