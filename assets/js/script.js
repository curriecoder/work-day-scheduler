var today = moment().format("[Today is ]MMM Do, YYYY");
var currentHour = moment().hour();
// var timeBlockHr = $("");
// var timeBlockArr = [];

// console.log(timeBlockHr);

$("#currentDay").text(today);

// I want to find the hour for each time-block
// I want to compare the time-block hour to the current hour
// change the color of the textarea for past, present and future



if (9 < (currentHour)) {
  $("#09").addClass("past")
} else if (9 > (currentHour)) {
  $("#09").addClass("future")
} else {
  $("#09").addClass("present")
};

if (10 < (currentHour)) {
  $("#10").addClass("past")
} else if (10 > (currentHour)) {
  $("#10").addClass("future")
} else {
  $("#10").addClass("present")
};

if (11 < (currentHour)) {
  $("#11").addClass("past")
} else if (11 > (currentHour)) {
  $("#11").addClass("future")
} else {
  $("#11").addClass("present")
};

if (moment(12).isBefore(currentHour)) {
  $("#12").addClass("past")
} else if (moment(12).isAfter(currentHour)) {
  $("#12").addClass("future")
} else {
  $("#12").addClass("present")
};

if (moment(13).isBefore(currentHour)) {
  $("#13").addClass("past")
} else if (moment(13).isAfter(currentHour)) {
  $("#13").addClass("future")
} else {
  $("#13").addClass("present")
};

if (moment(14).isBefore(currentHour)) {
  $("#14").addClass("past")
} else if (moment(14).isAfter(currentHour)) {
  $("#14").addClass("future")
} else {
  $("#14").addClass("present")
};

if (moment(15).isBefore(currentHour)) {
  $("#15").addClass("past")
} else if (moment(15).isAfter(currentHour)) {
  $("#15").addClass("future")
} else {
  $("#15").addClass("present")
};

if (moment(16).isBefore(currentHour)) {
  $("#16").addClass("past")
} else if (moment(16).isAfter(currentHour)) {
  $("#16").addClass("future")
} else {
  $("#16").addClass("present")
};

if (moment(17).isBefore(currentHour)) {
  $("#17").addClass("past")
} else if (moment(17).isAfter(currentHour)) {
  $("#17").addClass("future")
} else {
  $("#17").addClass("present")
};

// When save button is clicked, store description text in local storage.
function save(event) {
  var description = $("textarea").val();
  var saveBtn = $(event.target);
  
  console.log(description);
}

var container = $(".container")

container.on("click", ".saveBtn", save);