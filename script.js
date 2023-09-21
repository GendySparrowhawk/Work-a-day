
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeBlocks = $('.time-block');
$(function () {
  var currentHr = dayjs().hour();
  setTime();
  reset()
  timeBlocks.each(function (timeBlock) {
    timeBlock = $(this)
    var hour = timeBlock.attr('id').split('-') [1];
  
    console.log(timeBlock, currentHr, hour);
    if(hour == currentHr) {
      timeBlock.addClass('present');
    }
    else if (hour > currentHr) {
      timeBlock.addClass('future');
    }
    else if (hour < currentHr) {
      timeBlock.addClass('past');
    }
  })
  
});
setInterval(setTime, 60000);

function reset() {
  timeBlocks.removeClass('past');
  timeBlocks.removeClass('future');
  timeBlocks.removeClass('present');
}


// TODO: Add a listener for click events on the save button. This code should
  var save = $('.saveBtn');
  // use the id in the containing time-block as a key to save the user input in
  function saveTodo() {
    var btn = $(this);
    var textArea = btn.prev().val();
    var time = btn.parent().attr('id');
    console.log(textArea);
    localStorage.setItem(time, textArea);
  }
  save.click(saveTodo);

  function setTime() {
    currentDay.innerText = dayjs().format('ddd, MMMM D h:mm')
  }

  $('#hour-9 description').val(localStorage.getItem('hour-9'));

  $('#hour-10 description').val(localStorage.getItem('hour-10'));

  $('#hour-11 description').val(localStorage.getItem('hour-11'));

  $('#hour-12 description').val(localStorage.getItem('hour-12'));

  $('#hour-13 description').val(localStorage.getItem('hour-13'));

  $('#hour-14 description').val(localStorage.getItem('hour-14'));

  $('#hour-15 description').val(localStorage.getItem('hour-15'));

  $('#hour-16 description').val(localStorage.getItem('hour-16'));
  
  $('#hour-17 description').val(localStorage.getItem('hour-17'));
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

