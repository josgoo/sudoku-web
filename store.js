let store = Redux.createStore(_sudokuStore);

function _sudokuStore(oldState = _newGame("medium"), action) {
    let state = JSON.parse(JSON.stringify(oldState));
    
    switch (action.type) {
        case 'SAVE_GAME':
            localStorage.setItem('sudoku_saved_game', JSON.stringify(state));
            return state;
        case 'LOAD_GAME':
            const savedState = JSON.parse(localStorage.getItem('sudoku_saved_game'));
            return savedState || state;
        case 'CELL_INPUT':
            if (!sudoku.DIGITS.includes(action.value)) {
                return state;
            }
            state.board[action.index].value = action.value;
            break;
        case 'DIFFICULTY_CHANGE':
            state = _newGame(action.value);
            break;
    }
    return state;
}

function _newGame(difficulty) {
    let state = {};
    state.difficulty = difficulty;
    state.board = sudoku.generate(difficulty)
        .split('')
        .map(n => {
            return {
                type: (n === '.' ? 'normal' : 'given'),
                value: (n === '.' ? '' : n),
            }
        });
    return state;
}