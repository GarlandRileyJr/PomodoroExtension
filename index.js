document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM fully loaded and parsed");
    const start = document.getElementById('start'); 
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    start.onclick = testChange
  });

