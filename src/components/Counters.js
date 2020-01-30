import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../actions'

const Counters = () => {
    const [stateCount, setCount] = useState(0);
    const reduxCounter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <p>You clicked {stateCount} times - local state - </p>
            <p>You clicked {reduxCounter} times - Redux state - </p>
            <button onClick={() => setCount(stateCount + 1)}>
                Click me to Increment Local State
            </button>
            <button onClick={() => dispatch(allActions.counterActions.increment())}>
                Click me to Increment Redux State
            </button>
            <br></br>
            <button onClick={() => setCount(stateCount - 1)}>
                Click me to Decrement Local State
            </button>
            <button onClick={() => dispatch(allActions.counterActions.decrement())}>
                Click me to Decrement Redux State
            </button>
        </div>
    )

}

export default Counters;
