content = document.getElementById("content");


buttons = [];

function draw_grid(){
    for(let row=0; row<3; row++){
        button_in_row = [];
        for(let col=0; col<3; col++){
            let button = document.createElement("button");
            button.style.gridColumn = col + 1;
            button.style.gridRow = row  + 1;
            button.addEventListener("click", function(e){
                button_Click(row, col)
            });
            button.innerHTML = " "
            content.appendChild(button);
            button_in_row.push(button);
        }
        buttons.push(button_in_row)
    }
    console.log(buttons)
}

function button_Click(row, col) {
    button_clicked = buttons[row][col];
    button_clicked.innerHTML = "X"
}

draw_grid();