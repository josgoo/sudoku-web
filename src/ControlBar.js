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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select
                    className={styles.colorBarBlue}
                    onChange={(event) => this.props.onColorChange(event.target)}
                    value={this.props.color}
                >
                    <option value="purple" className={styles.colorBarPurple}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </option>
                    <option value="Azure" className={styles.colorBarAzure}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </option>
                    <option value="blue" className={styles.colorBarBlue}> </option>
                    <option value="green" className={styles.colorBarGreen}> </option>
                    <option value="black" className={styles.colorBarBlack}> </option>
                    <option value="pink" className={styles.colorBarPink}> </option>
                    <option value="Coral" className={styles.colorBarCoral}> </option>
                </select>
            </React.Fragment>
        );
    }
}

export default ControlBar;
