// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var canvas, color;
canvas = $('#pixel_canvas');
color = "#000000";

function makeGrid() {
	var heightVal, widthVal;
	
	heightVal = $('#input_height').val();
	widthVal = $('#input_width').val();
	
	for (var row = 0; row < heightVal; row++)
	{
		var horizantalRow = $('<tr></tr>');
		canvas.append(horizantalRow);
		for (var cell = 0; cell < widthVal; cell++)
		{
			horizantalRow.append($('<td></td>'));
		}
	}
	
	setColorToSquare();
}

function deletePreviousCanvas(){
	var tr;
	tr = canvas.find('tr');
	tr.remove();
}

function setColorToSquare(){
	
	// Set the new choosen color
	$('#colorPicker').change(function(){
		color = $(this).val();
	})

	$('#pixel_canvas').find('tr').on('click', 'td', function(event){
		$(event.target).css('background-color', color);
	})
}

$(function() {
	var td, tr;
	var verticalRow = $('<td></td>');
	tr = canvas.find('tr');

	$('#sizePicker').submit(function(event) {
		deletePreviousCanvas();
		event.preventDefault();
		makeGrid();
	});
});