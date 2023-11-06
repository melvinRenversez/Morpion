content = document.getElementById("content");


buttons = [];
player = "O";
Win = false;

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
            button.innerHTML = "   "
            content.appendChild(button);
            button_in_row.push(button);
            console.log(button.offsetWidth, button.offsetHeight)
        }
        buttons.push(button_in_row)
    }
}

function button_Click(row, col) {
    button_clicked = buttons[row][col];
    button_clicked.innerHTML = player
    check_win(row, col)
    switch_player();
    button.disabled = false
}

function check_win(row, col) {
    // X
    count = 0
    for (var i = 0; i < 3; i++) {
        button = buttons[row][i];
        if (button.innerHTML === "X" && Win == false){
            count++;
            if (count == 3) {
                Win = true
                win();
            }
        }
    }
    count = 0
    for (var i = 0; i < 3; i++) {
        button = buttons[i][col];
        if (button.innerHTML === "X" && Win == false){
            count++;
            if (count == 3) {
                Win = true
                win();
            }
        }
    }
    count = 0
    for (var i = 0; i < 3; i++) {
        button = buttons[i][i];
        if (button.innerHTML === "X" && Win == false){
            count++;
            if (count == 3) {
                Win = true
                win();
            }
        }
    }
    count = 0
    for (var i = 0; i < 3; i++) {
        button = buttons[i][2-i];
        if (button.innerHTML === "X" && Win == false){
            count++;
            if (count == 3) {
                Win = true
                win();
            }
        }
    }
    // O
    count = 0
    for (var i = 0; i < 3; i++) {
        button = buttons[row][i];
        if (button.innerHTML === "O" && Win == false){
            count++;
            if (count == 3) {
                Win = true
                win();
            }
        }
    }
    count = 0
    for (var i = 0; i < 3; i++) {
        button = buttons[i][col];
        if (button.innerHTML === "O" && Win == false){
            count++;
            if (count == 3) {
                Win = true
                win();
            }
        }
    }
    count = 0
    for (var i = 0; i < 3; i++) {
        button = buttons[i][i];
        if (button.innerHTML === "O" && Win == false){
            count++;
            if (count == 3) {
                Win = true
                win();
            }
        }
    }
    count = 0
    for (var i = 0; i < 3; i++) {
        button = buttons[i][2-i];
        if (button.innerHTML === "O" && Win == false){
            count++;
            if (count == 3) {
                Win = true
                win();
            }
        }
    }
}

function switch_player(){
    if (player == "X"){
        player = "O";
    }
    else{
        player = "X";
    }
}

function win(){
    winner = player;
    print_winner(winner);
}

function print_winner(winner_name){
    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            button = buttons[r][c];
            button.remove();
        }
    }
    text = document.createElement("h1")
    text.innerHTML = "The winner is " + winner_name;
    content.appendChild(text);
    restart_button = document.createElement("button");
    restart_button.innerHTML = "Restart";
    restart_button.addEventListener("click", function(){
        text.remove();
        restart_button.remove();
        restart();
    })
    content.appendChild(restart_button);

}

function restart(){
    buttons = [];
    player = "O";
    Win = false;
    draw_grid();
}

draw_grid();