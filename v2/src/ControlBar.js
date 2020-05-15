import React, { Component } from 'react';
import styles from './ControlBar.module.css';

class ControlBar extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.onNewGameClick()}>New Game</button>  &nbsp;&nbsp;
                <select
                    className={styles.difficultySelect}
                    onChange={(event) => this.props.onDifficultyChange(Number(event.target.value))}
                    value={this.props.difficulty}
                >
                    <option value="62">&#9733;&#9734;&#9734;&#9734;&#9734;</option>
                    <option value="53">&#9733;&#9733;&#9734;&#9734;&#9734;</option>
                    <option value="44">&#9733;&#9733;&#9733;&#9734;&#9734;</option>
                    <option value="35">&#9733;&#9733;&#9733;&#9733;&#9734;</option>
                    <option value="26">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                </select>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => this.props.onSyncClick()}>Sync</button>
                <button onClick={() => this.props.onResetClick()}>Reset</button>
            </React.Fragment>
        );
    }
}

export default ControlBar;
