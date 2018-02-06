var canvas, color;
canvas = $('#pixel_canvas');
color = "#000000";

function makeGrid() {
	let heightVal, widthVal;
	// Set the size of the table
	heightVal = $('#input_height').val();
	widthVal = $('#input_width').val();
	
	// Build Grid
	for (var row = 0; row < heightVal; row++)
	{
		let horizantalRow = $('<tr></tr>');
		canvas.append(horizantalRow);
		for (var cell = 0; cell < widthVal; cell++)
		{
			horizantalRow.append($('<td></td>'));
		}
	}
	
	setColorToSquare();
}

// This function delete previous existing Canvas to restart a new canvas
function deletePreviousCanvas(){
	let tr;
	tr = canvas.find('tr');
	tr.remove();
}

function setColorToSquare(){	
	// Set the new choosen color
	$('#colorPicker').change(function(){
		color = $(this).val();
	})

	// Fill the cell clicked with the chosen color
	canvas.find('tr').on('click', 'td', function(event){
		$(event.target).css('background-color', color);
	})
}

$(function() {
	let td, tr, verticalRow;
	verticalRow = $('<td></td>');
	tr = canvas.find('tr');

	$('#sizePicker').submit(function(event) {
		deletePreviousCanvas();
		event.preventDefault();
		makeGrid();
	});
});