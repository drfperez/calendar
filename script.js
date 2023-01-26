
function loadEvents(){
var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
if (month == 1 && day == 1) {
// Show your custom text and image for January 1st
document.getElementById("events").innerHTML = "Happy New Year! Let's make it a great one.";
document.getElementById("event-image").src = "https://cdn.zeebiz.com/sites/default/files/2022/12/28/218713-happy-new-year-g6e967bd581920.jpg";
document.getElementById("event-image").style.display = "block";
} 
else if (month == 2 && day == 14) {
// Show your custom text and image for January 1st
document.getElementById("events").innerHTML = "LOVE;LOVE; AND LOVE";
document.getElementById("event-image").src = "https://quelles-dates.fr/wp-content/uploads/Saint-Valentin.jpg";
document.getElementById("event-image").style.display = "block";
} 
else {
// Show a message if no events are available for the selected date
document.getElementById("events").innerHTML = "No events available for this date.";
document.getElementById("event-image").style.display = "none";
}
}

