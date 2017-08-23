document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM fully loaded and parsed");
    const clockFace = document.getElementById('clockFace')
    const start = document.getElementById('start'); 
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let endTime = new Date().getTime() + 1500000
    start.addEventListener('click', ()=>{
      console.log(endTime)
      setInterval(() => {
        // call function that changes the innerHTML of the clockFace element every millisecond counting down from 25m 00s
      })
    })
    
});


// var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("clockFace").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("clockFace").innerHTML = "EXPIRED";
//   }
// }, 1000);