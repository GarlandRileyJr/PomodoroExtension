
document.addEventListener("DOMContentLoaded", function(e) {

  const clockFace = document.getElementById('clockFace')
  const start = document.getElementById('start'); 
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime = 1500000;

  let currentTimeMin = (time) => {
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  }

  let currentTimeSec = (time) => {
    return Math.floor((time % (1000 * 60)) / 1000);
  }

  let timer;
  let timerRunning = false;

  start.addEventListener('click', () => {
    timerRunning = true
    timer = setInterval(() => {
      // call function that changes the innerHTML of the clockFace element every millisecond counting down from 25m 00s
      if (startTime === 1500000) {startTime = startTime - 1000}
      clockFace.innerHTML = currentTimeMin(startTime) + "m " + currentTimeSec(startTime) + "s"
      return startTime = startTime - 1000
    }, 1000);
  })

  stop.addEventListener('click', () => {
    timerRunning = false;
    clearInterval(timer)
  })

  reset.addEventListener('click', () => {
    if(startTime !== 1500000 && !timerRunning) {
      startTime = 1500000;
      clockFace.innerHTML = currentTimeMin(startTime) + "m " + currentTimeSec(startTime) + "0s";
    }
  })
  
});
