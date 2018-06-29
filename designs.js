// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var rowsInput;
var colsInput;

//function building the grids
function makeGrid() {
    var table = document.getElementById("pixelCanvas");
//resets table ,when the submit button is clicked 
    while(table.rows.length > 0)
        table.deleteRow(0);
    rowsInput = document.getElementById("inputHeight").value;
    colsInput = document.getElementById("inputWeight").value;
    for (var i = 0; i < rowsInput; i++) {
        var row_elem = table.insertRow(i);
        row_elem.setAttribute("class", "row");
        for (var j = 0; j < colsInput; j++) {
            var cell= row_elem.insertCell(j);
            cell.addEventListener('click', function(evt) {
                evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        }
    }
    return false;
}

document.getElementById("sizePicker").addEventListener("submit", function(evt) {
    evt.preventDefault();
    makeGrid();
});
