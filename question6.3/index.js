// Complete the following code to make a Javascript based digital clock.


function myDigitalClock() {
    var d1 = new Date();
    var hours = d1.getHours()
    var minutes = d1.getMinutes()
    var seconds = d1.getSeconds()
    var zone = "AM";
   
    if (hours >= 12) {
        zone = "PM";
        hours = hours - 12;
    }
    
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
   
    var timeString = hours + ":" + minutes + ":" + seconds + " " + zone;
    
    document.getElementById("clock").innerHTML = timeString;
   
    setTimeout(myDigitalClock, 1000);
}

myDigitalClock();