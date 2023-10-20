    var inputValues = []; // Array to store input values

  $(".input-number").on("input", function () {
    var inputValue = $(this).val();

    if (!/^[01]*$/.test(inputValue)) {
      alert("Please enter only '0' or '1'");
      $(this).val(inputValue.replace(/[^01]/g, ""));
    }
  });



// Get all input boxes with class "input-number"
    var inputNumbers = $('.input-number');
     // Loop through each input box
    inputNumbers.each(function(index) {
      $(this).on('input', function() {
        if ($(this).val().length === 1) {
          // Store the input value in the array
          inputValues[index] = $(this).val();
          
          // Move the focus to the next input box
          if (index < inputNumbers.length - 1) {
            inputNumbers.eq(index + 1).focus();
          }
          
          // Check if all input boxes have a value
          var allFilled = inputValues.every(function(value) {
            return value !== undefined;
          });
          
          // Enable the "Check" button if all input boxes are filled
          if (allFilled) {
            $('#check-btn').prop('disabled', false);
            $('#check-btn').removeClass('bg-gray-300 text-gray-500');
            $('#check-btn').addClass('bg-purple-500 text-white');
          } else {
            $('#check-btn').prop('disabled', true);
            $('#check-btn').removeClass('bg-purple-500 text-white');
            $('#check-btn').addClass('bg-gray-300 text-gray-500');
          }
          
          // Remove the "bg-red-500" class if input is filled
          $(this).removeClass('bg-red-500');
        } else {
          // Add the "bg-red-500" class if input is not filled
          $(this).addClass('bg-red-500');
        }
      });
    });

    // Click event handler for the "Check" button
    $('#check-btn').on('click', function() {
      // Check if all input boxes have a value
      var allFilled = inputValues.every(function(value) {
        return value !== undefined;
      });
      
      // Log all input values to the console if all input boxes are filled
      if (allFilled) {
        console.log(inputValues);
      }
    });