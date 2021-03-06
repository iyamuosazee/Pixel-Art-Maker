// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function () {
    $("#sizePicker").submit(function (event) {
      event.preventDefault();
  
      var row;
      var column;
      var color;
  
      row = $("#inputHeight").val();
      column = $("#inputWidth").val();
      makeGrid(row, column);
    });
  });
  
  function makeGrid(height, width) {
    $("tr").remove();
  
    for (var x = 1; x <= height; x++) {
      $("#pixelCanvas").append("<tr></tr>");
  
      for (var y = 1; y <= width; y++) {
        $('tr').filter(':last').append('<td></td>');
      }
    }
  }