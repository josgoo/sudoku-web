init();

const cells = [...document.querySelectorAll('#sudokuBoard td')];
const inputs = [...document.querySelectorAll('#sudokuBoard td input')];

function init() {
    // Create the 'sudokuBoard' table
    document.querySelector('#sudokuBoard').innerHTML = buildBoardHTML();

    // Setup each cell
    [...document.querySelectorAll('#sudokuBoard td')].forEach((cell, index) => {
        cell.id = 'c' + index;
        cell.innerHTML = buildCellHTML();
    });
}

function buildBoardHTML() {
    let boardHTML = '<tbody>';
    for (let y = 0; y < 9; y++) {
        boardHTML += '<tr>';
        for (let x = 0; x < 9; x++) {
            boardHTML += '<td></td>';
        }
        boardHTML += '</tr>';
    }
    boardHTML += '</tbody>';
    return boardHTML;
}

function buildCellHTML() {
    let cellHTML = '<input type="text" maxlength="1">';
    return cellHTML;
}

// *****************************************************
// Temporary rendering code
let __board = sudoku.generate("medium");
__board = __board.split('').map(num => {
    return num === '.' ? '' : num;
});

inputs.forEach((input, index) => {
    input.value = __board[index];
});
// *****************************************************