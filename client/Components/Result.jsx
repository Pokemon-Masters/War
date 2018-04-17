import React from 'react';

const Result = (props) => {
  // const result = props.winState ? <div id="winner">Winner!</div> : <div id="loser">Loser!</div>
  const result = props.winState !== null && props.winState !== undefined ?
    props.winState ?
      <div id="winner">Winner!</div> :
      <div id="loser">Loser!</div>
    :<div id='blank'></div>;
  return (
    <div id='result-display'>
      {result}
    </div>
  )
}

export default Result;