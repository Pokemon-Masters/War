import React from 'react';

const ScoreBoard = (props) => {
    return (
        <div>
            <div className="scoreboard">{props.redScore}</div>
            <div className="scoreboard">{props.blueScore}</div>
        </div>
    )
}

export default ScoreBoard;