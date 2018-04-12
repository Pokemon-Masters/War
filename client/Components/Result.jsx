import React from 'react';

const Result = (props) => {
    const result = props.winState !== null && props.winState !== undefined ?
        props.winState ?
            <div id="winner">Winner!</div> :
            <div id="loser">Loser!</div>
        :<div></div>;
    return (
        <div >
            {result}
        </div>
    )
}

export default Result;