// global variable for timeblocks
var timeBlocks = $('.time-block');

$(function () {
  var currentHr = dayjs().hour();
  setTime();
  reset()
  // for each loop that sets colors based on current time
  timeBlocks.each(function (timeBlock) {
    timeBlock = $(this)
    var hour = timeBlock.attr('id').split('-')[1];

    console.log(timeBlock, currentHr, hour);
    if (hour == currentHr) {
      timeBlock.addClass('present');
    }
    else if (hour > currentHr) {
      timeBlock.addClass('future');
    }
    else if (hour < currentHr) {
      timeBlock.addClass('past');
    }
    
  })
 
 
  // refreshes the date ever minute
  setInterval(setTime, 60000);
  
  // removes all classes on loading so they will be updated with corrrect colors
  function reset() {
    timeBlocks.removeClass('past');
    timeBlocks.removeClass('future');
    timeBlocks.removeClass('present');
  }


  // a listener for click events on the save button.
  var save = $('.saveBtn');
  // saves user input to local storage
  function saveTodo() {
    var btn = $(this);
    var textArea = btn.prev().val();
    var time = btn.parent().attr('id');
    console.log(textArea);
    localStorage.setItem(time, textArea);
    alert('Task Saved!');

  }
  save.click(saveTodo);
  // set time function called above
  function setTime() {
    currentDay.innerText = dayjs().format('ddd, MMMM D h:mm')
  }
  console.log(localStorage.getItem('hour-9'));
  // sets text of time slots to local storage value
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

});


