
document.addEventListener("DOMContentLoaded", function(e) {
<<<<<<< HEAD
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
      clockFace.innerHTML = currentTimeMin(startTime) + ":" + currentTimeSec(startTime)
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
      clockFace.innerHTML = currentTimeMin(startTime) + ":" + currentTimeSec(startTime) + "0";
    }
  })
=======
    console.log("DOM fully loaded and parsed");
    const clockFace = document.getElementById('clockFace')
    const start = document.getElementById('start'); 
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let endTime = new Date().getTime() + 1500000
    start.addEventListener('click', ()=>{
      console.log(endTime)

      let x = 0
      setInterval(() => {
        // call function that changes the innerHTML of the clockFace element every millisecond counting down from 25m 00s
        clockFace.innerHTML = x
        return x++
      }, 1000)
    })
    
>>>>>>> c88e5f067204b452b38c61fcb8ae84fc04219c27
});
