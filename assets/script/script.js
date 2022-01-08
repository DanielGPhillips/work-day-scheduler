var timeAreaElement = document.getElementsByName('textarea')
var timeText = document.getElementsByClassName('timeText')
var hourTime = parseInt(moment().format('H'))

function displayCurrentTime() {
    setTimeout(displayCurrentTime, 1000);
    var exactTime = moment()
    document.getElementById('currentDay').innerText = exactTime.format('MMMM Do YYYY, H:m:ss a');
}
displayCurrentTime();

Array.from(timeText).forEach(textarea => {
    var textAreaIDString = timeAreaElement.id;
    var textAreaHour;
    if (textAreaIDString) {
        textAreaHour = parseInt(textAreaIDString);
    }
    if (textAreaHour) {
        if (hourTime === textAreaHour) {
            Element.classList.add('present')
        }
        if (hourTime < textAreaHour) {
            Element.classList.add('past')
        }
        if (hourTime > textAreaHour) {
            Element.classList.add('future')
        }
    } 
})




