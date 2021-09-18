var today = moment().format("dddd, MMM Do, YYYY");
var currentHour = moment().hour();

$("#currentDay").text(today);

// function to check currentHour against timeblock hour and change color/
function hourColor() {
  for (i = 9; i < 18; i++) {
    if (i < currentHour) {
      $("#" + i).addClass("past");
    } else if (i > currentHour) {
      $("#" + i).addClass("future");
    } else {
      $("#" + i).addClass("present");
    }
  }
}

hourColor();

// function to check local storage for all timeblocks
function renderLast() {
  for (i = 9; i < 18; i++) {
    localStorage.getItem(i);
    $("#" + i).val(localStorage.getItem(i));
  }
}

renderLast();

// function to save description text to local storage
function save(event) {
  event.preventDefault();
  $(event.target);
  var description = $(this).siblings("textarea").val();
  var numId = $(this).siblings("textarea").attr("id");

  localStorage.setItem(numId, description);
}

var container = $(".container");

container.on("click", ".saveBtn", save);
