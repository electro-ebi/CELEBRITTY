var R = 3;
var C = 3;
var matrix = [];

$(".input-number").on("input", function () {
  var inputValue = $(this).val();

  if (!/^[01]*$/.test(inputValue)) {
    alert("Please enter only '0' or '1'");
    $(this).val(inputValue.replace(/[^01]/g, ""));
  }
});

var inputNumbers = $(".input-number");
var inputValues = [];

// Loop through each input box
inputNumbers.each(function (index) {
  $(this).on("input", function () {
    if ($(this).val().length === 1) {
      // Store the input value in the array
      inputValues[index] = $(this).val();

      // Move the focus to the next input box
      if (index < inputNumbers.length - 1) {
        inputNumbers.eq(index + 1).focus();
      }

      // Check if all input boxes have a value
      var allFilled = inputNumbers.toArray().every(function (input) {
        return $(input).val().trim() !== "";
      });

      // Enable or disable the "Check" button based on the input boxes' status
      $("#check-btn").prop("disabled", !allFilled);
      $("#check-btn").toggleClass(
        "bg-purple-500 text-purple-200 hover:bg-purple-300 hover:text-purple-600",
        allFilled
      );
      $("#check-btn").toggleClass("bg-gray-300 text-gray-500", !allFilled);

      // Remove the "bg-red-500" class if input is filled
      $(this).removeClass("bg-red-200 focus:border-red-600");
    } else {
      // Add the "bg-red-500" class if input is not filled
      $(this).addClass("bg-red-200 focus:border-red-600");

      // Disable the "Check" button if any input box is not filled
      $("#check-btn").prop("disabled", true);
      $("#check-btn").removeClass(
        "bg-purple-500 text-purple-200 hover:bg-purple-300 hover:text-purple-600"
      );
      $("#check-btn").addClass("bg-gray-300 text-gray-500");
    }
  });
});

// Click event handler for the "Check" button
$("#check-btn").on("click", function () {
  // Check if all input boxes have a value
  var allFilled = inputNumbers.toArray().every(function (input) {
    return $(input).val().trim() !== "";
  });

  // Log all input values to the console if all input boxes are filled
  if (allFilled) {
    console.log(inputValues);

    matrix = [];
    for (var i = 0; i < R; i++) {
      var row = [];
      for (var j = 0; j < C; j++) {
        row.push(parseInt(inputValues[i * C + j]));
      }
      matrix.push(row);
    }

    console.log("Matrix:");
    for (var i = 0; i < R; i++) {
      for (var j = 0; j < C; j++) {
        console.log(matrix[i][j]);
      }
      console.log();
    }

    var flag = false;
    for (var i = 0; i < R; i++) {
      for (var j = 0; j < C; j++) {
        if (i === j) {
          var c = 0;
          var r = 0;
          for (var a = 0; a < C; a++) {
            if (matrix[i][a] === 0) {
              c++;
            }
          }
          for (var b = 0; b < R; b++) {
            if (matrix[b][j] === 1) {
              r++;
            }
          }
          if (c === C && r === R - 1) {
            flag = true;
          }
        }
      }
    }

    if (flag) {
      console.log("It is a celebrity");
      $("#result").text("It is a celebrity");
    } else {
      console.log("It is not a celebrity");
      $("#result").text("It is not a celebrity");
    }
  }
  $("#result").addClass("text-xl");
  $("#check-btn").addClass("hidden");
  $("#try-again").removeClass("hidden");
});

/// Click event handler for the "Try Again" button
$("#try-again").on("click", function () {
  // Reload the page
  location.reload();
});
