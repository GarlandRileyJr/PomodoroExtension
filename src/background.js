
document.addEventListener("DOMContentLoaded", function(e) {
  const clockFace = document.getElementById('clockFace'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    reset = document.getElementById('reset');

  let startTime = 10000; // this needs to be reset to 1500000 for currect startTime

  let currentTimeMin = (time) => {
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  };

  let currentTimeSec = (time) => {
    return Math.floor((time % (1000 * 60)) / 1000);
  };

  let timer;
  let timerRunning = false;

  let started = start.addEventListener('click', () => {

    timerRunning = true;
    timer = setInterval(() => {
      // call function that changes the innerHTML of the clockFace element every millisecond counting down from 25m 00s
      if (startTime === 1500000) {startTime = startTime - 1000}
      if(startTime < 60000) {
        if(startTime < 10000) {
          clockFace.innerHTML = `0${currentTimeMin(startTime)}:0${currentTimeSec(startTime)}`;
        }
        else {
          clockFace.innerHTML = `0${currentTimeMin(startTime)}:${currentTimeSec(startTime)}`
        }
      }
      else {
        clockFace.innerHTML = `${currentTimeMin(startTime)}:${currentTimeSec(startTime)}`;
      }
      if(startTime === 0) {
        // timerRunning = false;
        // stopped();
        
        // this conditional should trigger a function to play the sound file from the assets folder.
        // it should also trigger an alert notification that makes the user click to stop the sound
        // and start the break timer. Still unsure about the process for transitioning from break time
        // back to pomodoro time

      }
      return startTime = startTime - 1000;
    }, 1000);
    

  });

  let stopped = stop.addEventListener('click', () => {
    timerRunning = false;
    clearInterval(timer);
  });

  /*
  Strange side effect: When timer naturally reaches 0:00 and beenReset is called, the timer is reset to 
  25:00 and immediately begins to run. need to flesh out timer functionality and make code DRYer. don't want
  to repeat the timer function over and over. want it to be a function that we pass
  value to
  */
  
  let beenReset = reset.addEventListener('click', () => {
    if(startTime !== 1500000 && !timerRunning) {
      startTime = 1500000;
      clockFace.innerHTML = `${currentTimeMin(startTime)}:${currentTimeSec(startTime)}0`;
    }
  });
  
});
