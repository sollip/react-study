import React from 'react';
import '../css/counter.css'

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div className="Counter" onClick={onIncrement} onContextMenu={(e)=>{e.preventDefault(); onDecrement();}} onDoubleClick={onSetColor} style={{backgroundColor: color}}>
            {number}
        </div>
    );
};

Counter.defaultProps = {
    number: 0,
    color: 'black'
}
export default Counter;