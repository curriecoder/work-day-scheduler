var today = moment().format("dddd, MMM Do, YYYY");
var currentHour = moment().hour();

// console.log(timeBlockHr);

$("#currentDay").text(today);

// I want to find the hour for each time-block
// I want to compare the time-block hour to the current hour
// change the color of the textarea for past, present and future

if (9 < currentHour) {
  $("#9").addClass("past");
} else if (9 > currentHour) {
  $("#9").addClass("future");
} else {
  $("#9").addClass("present");
}

if (10 < currentHour) {
  $("#10").addClass("past");
} else if (10 > currentHour) {
  $("#10").addClass("future");
} else {
  $("#10").addClass("present");
}

if (11 < currentHour) {
  $("#11").addClass("past");
} else if (11 > currentHour) {
  $("#11").addClass("future");
} else {
  $("#11").addClass("present");
}

if (12 < currentHour) {
  $("#12").addClass("past");
} else if (12 > currentHour) {
  $("#12").addClass("future");
} else {
  $("#12").addClass("present");
}

if (13 < currentHour) {
  $("#13").addClass("past");
} else if (13 > currentHour) {
  $("#13").addClass("future");
} else {
  $("#13").addClass("present");
}

if (14 < currentHour) {
  $("#14").addClass("past");
} else if (14 > currentHour) {
  $("#14").addClass("future");
} else {
  $("#14").addClass("present");
}

if (15 < currentHour) {
  $("#15").addClass("past");
} else if (15 > currentHour) {
  $("#15").addClass("future");
} else {
  $("#15").addClass("present");
}

if (16 < currentHour) {
  $("#16").addClass("past");
} else if (16 > currentHour) {
  $("#16").addClass("future");
} else {
  $("#16").addClass("present");
}

if (17 < currentHour) {
  $("#17").addClass("past");
} else if (17 > currentHour) {
  $("#17").addClass("future");
} else {
  $("#17").addClass("present");
}
// When save button is clicked, store description text in local storage.

renderLast();

function renderLast() {
  for (var i = 9; i < 18; i++) {
    localStorage.getItem(i);
    $("#" + i).val(localStorage.getItem(i));
  }
}

function save(event) {
  event.preventDefault();
  var saveBtn = $(event.target);
  var description = saveBtn.parent().siblings("textarea").val();
  var numId = saveBtn.parent().siblings("textarea").attr("id");

  localStorage.setItem(numId, description);
  console.log(saveBtn.parent().siblings("textarea").val());
}

var container = $(".container");

container.on("click", ".saveBtn", save);