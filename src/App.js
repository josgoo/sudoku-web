import React, { Component } from 'react';
import './App.css';
import ControlBar from './ControlBar';
import Grid from './Grid';
import InputBar from './InputBar';
import * as lib from './lib';
import { deepCopyGrid } from './util';
import updateConflicts from './conflicts';

class App extends Component{

  constructor(props) {
    super(props);
    
    const grid = this.getGrid(-1);
    const difficulty = this.getDifficulty();
    this.state = {
      difficulty: difficulty,
      color: "blue",
      grid: grid,         // Sudoku grid
      input: {            // InputBar selections
        digit: null,        // Selected digit
        noteEnable: false,  // Whether to enter the selected digit as a note
      },
    };


  }
  saveGrid(grid) {
      //console.log("saving Grid")
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({grid: grid})
      }
      fetch("https://soduku-api.herokuapp.com/testAPI/setGrid", requestOptions)
          .then(res => {this.setState({grid: grid})})
          .catch(err => console.log("error"))
  }
  getGrid(index){
    fetch("https://soduku-api.herokuapp.com/testAPI/getGrid")
          .then(response => response.json())
          .then(res => {this.setState({grid: res})})
          .then(response => {if (index >= 0){this.handleCellClick2(index)}})
          //.catch(err => console.log("error"))

      
  }
  getDifficulty(grid){
    fetch("https://soduku-api.herokuapp.com/testAPI/getDifficulty")
          .then(response => response.json())
          .then(res => {this.setState({ difficulty: res })})
          .catch(err => console.log("error"))
  }
  saveDifficulty(difficulty) {
      //console.log("save difficulty: " + difficulty)
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({difficulty: difficulty})
      }
      fetch("https://soduku-api.herokuapp.com/testAPI/setDifficulty", requestOptions)
          .then(res => {this.setState({difficulty: difficulty})})
          .catch(err => console.log("difficulty error"))
  }
  handleCellClick(index){
    this.getGrid(index)
  }
  handleCellClick2(index) {

    let grid = deepCopyGrid(this.state.grid);

    const { digit, noteEnable } = this.state.input;

    if (noteEnable) {
      // The player wants to input a note; first check whether the cell is already type 'notes'
      if (grid[index].type !== 'notes') {
        // Do nothing if there is already a digit in the cell
        if (grid[index].value !== null) {
          return;
        }
        // Otherwise, make this a 'notes' cell
        grid[index].type = 'notes';
        grid[index].value = [];
      }
      // Now that we're sure the cell is a 'notes' cell, set or unset the appropriate note
      grid[index].value[digit - 1] = !grid[index].value[digit - 1];
    } else {
      // Otherwise, this was normal input. Set the cell's value with the selected digit.
      grid[index].type = this.state.color;
      grid[index].prev_type = this.state.color;
      //console.log(grid[index].prev_type)
      grid[index].value = digit;
    }
    grid = updateConflicts(grid);
    //lib.saveGame(grid);
    this.saveGrid(grid);
    // Update grid
    //this.setState({ grid });
  }

  handleColorChange(color){
    //console.log(color)
    //console.log(color.options[color.selectedIndex].className)
    color.className = color.options[color.selectedIndex].className

    this.setState({color: color.value});
    //console.log(this.state.color);
  }

  handleDifficultyChange(value) {
    this.saveDifficulty(value)
    //this.setState({difficulty : value});
    this.handleNewGameClick(value)
  }

  handleNewGameClick(value) {
    if (value){
      let newGrid = lib.newGame(value)
      this.saveGrid(newGrid);
      //lib.saveGame(newGrid);
      //this.setState({ grid: newGrid });
    }else if (this.state.difficulty != null){
      let newGrid = lib.newGame(this.state.difficulty)
      this.saveGrid(newGrid);
      //lib.saveGame(newGrid);
      //this.setState({ grid: newGrid });
    }else {
      let newGrid = lib.newGame(this.state.grid.difficulty)
      this.saveGrid(newGrid);
      //lib.saveGame(newGrid);
      //this.setState({ grid: newGrid });
    }
  }

  handleDigitSelect(digit) {
    this.setState({ input: {...this.state.input, digit} });
    this.getGrid(-1);
  }

  handleHintClick() {
    //this.setState({ controls: {...this.state.controls, hint: !this.state.controls.hint} });
  }
  handleSyncClick() {
    this.getGrid(-1)
    this.getDifficulty()
    //window.location.reload();
  }

  handleNoteToggle() {
    this.setState({ input: {...this.state.input, noteEnable: !this.state.input.noteEnable} });
  }

  handleResetClick() {
    const resetGrid = lib.resetGame(this.state.grid, this.state.difficulty);
    this.saveGrid(resetGrid)
    //lib.saveGame(resetGrid);
    //this.setState({ grid: resetGrid });
  }

  render() {
    return (
      <div className="App">
        <header className="heading">
          Erika and Joseph Sudoku
        </header>
        
        <ControlBar
          difficulty = {this.state.difficulty}
          onDifficultyChange={(difficulty) => this.handleDifficultyChange(difficulty)}
          onColorChange={(color) => this.handleColorChange(color)}
          onHintClick={() => this.handleHintClick()} 
          onSyncClick={() => this.handleSyncClick()}
          onResetClick={() => this.handleResetClick()}
          onNewGameClick={() => this.handleNewGameClick()}

        />
        <br></br>
        <Grid grid={this.state.grid} onClick={(index) => this.handleCellClick(index)}/>
        <InputBar
          onDigitSelect={(digit) => this.handleDigitSelect(digit)}
          onNoteToggle={() => this.handleNoteToggle()}
        />
      </div>
    );
  }
}

export default App;
