import {createStore} from 'redux';
import sudoku from './generator/sudoku';
import updateConflicts from './conflicts';

const store = createStore(_sudokuStore);

const emptyCell = { class: 'normal', value: '' };


function _sudokuStore(oldState = _initStore(), action) {
    let state = JSON.parse(JSON.stringify(oldState));
    
    switch (action.type) {
        case 'RESET_GAME':
            state.board = state.board.map(cell => cell.class === 'given' ? cell : emptyCell);
            return state;
        case 'CELL_INPUT':
            if (!'123456789'.includes(action.value)
            || state.board[action.index].class === 'given') {
                return state;
            }
            state.board[action.index].value = action.value;
            break;
        case 'NEW_GAME':
            state = _newGame(action.value);
            break;
    }
    updateConflicts(state.board);
    localStorage.setItem('sudoku_saved_game', JSON.stringify(state));
    return state;
}

function _initStore() {
    const savedState = JSON.parse(localStorage.getItem('sudoku_saved_game'));
    return savedState || _newGame('medium');
}

function _newGame(difficulty) {
    let state = {};
    state.difficulty = difficulty;
    state.board = sudoku.generate(difficulty)
        .split('')
        .map(n => n === '.' ? emptyCell : { class: 'given', value: n });
    return state;
}

export default store;