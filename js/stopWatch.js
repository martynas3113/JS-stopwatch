 function stopWatch () {
    let seconds = 0;
    let tens = 0;
    let appendTens = document.querySelector('.tens');
    let appendSeconds = document.querySelector('.seconds');
    let ButtonStart = document.querySelector('.start');
    let ButtonStop = document.querySelector('.stop');
    let ButtonReset = document.querySelector('.reset');
    let Interval = 0;


    function startTimer () {
        tens++;

        if(tens < 9) {
            appendTens.innerHTML = '0' + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML  = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' + tens;

        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        
    }

    ButtonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
    }
    ButtonStop.onclick = function() {
        clearInterval(Interval);

    }
    ButtonReset.onclick = function(){
        clearInterval(Interval)
        tens = '00';
        seconds = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }



}   

export { stopWatch }