var timeAreaElement = document.getElementsByName('textarea')
var timeText = document.getElementsByClassName('timeText')
var saveBtn = document.getElementsByClassName('saveBtn')
var hourTime = parseInt(moment().format('H'))

//displays current time at top of page
function displayCurrentTime() {
    setTimeout(displayCurrentTime, 1000);
    var exactTime = moment()
    document.getElementById('currentDay').innerText = exactTime.format('MMMM Do YYYY, H:m:ss a');
}
displayCurrentTime();

//Color change based on calendar hour vs current hour
Array.from(timeText).forEach(textarea => {
    var textAreaIDString = textarea.id;
    var textAreaHour;
    if (textAreaIDString) {
        textAreaHour = parseInt(textAreaIDString);
    }
    if (textAreaHour) {
        if (hourTime === textAreaHour) {
            textarea.classList.add('present')
        }
        if (hourTime < textAreaHour) {
            textarea.classList.add('future')
        }
        if (hourTime > textAreaHour) {
            textarea.classList.add('past')
        }
    }
    
})

//Locally stores date entered into text fields upon click of save button
Array.from(saveBtn).forEach(button => {
        button.addEventListener('click', function() {
            var key = button.name
            var calendarEvent = $(button).siblings('.description')[0]
            
            localStorage.setItem(key, calendarEvent.value)
            console.log(localStorage.getItem(key))
        })
    })



// document.get
// localStorage.setItem('9AM', document.getElementsByName('nineText').innerText)


// localStorage.setItem('10AM', document.getElementsByName('tenText').innerText)
// localStorage.setItem('11AM', document.getElementsByName('elevenText').innerText)
// localStorage.setItem('12PM', document.getElementsByName('twelveText').innerText)
// localStorage.setItem('1PM', document.getElementsByName('oneText').innerText)
// localStorage.setItem('2PM', document.getElementsByName('twoText').innerText)
// localStorage.setItem('3PM', document.getElementsByName('threeText').innerText)
// localStorage.setItem('4PM', document.getElementsByName('fourText').innerText)
// localStorage.setItem('5PM', document.getElementsByName('fiveText').innerText)

// function saveCalendarData () {
//     var calendarData= document.getElementsByClassName('description').value;
//     localStorage.setItem('')
// }


