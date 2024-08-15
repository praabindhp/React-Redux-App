import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/actions';
import './Counter.css';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter ~ {count}</h1>
            <div className="button-group">
                <button className="counter-button" onClick={() => dispatch(increment())}>Increment</button>
                <button className="counter-button reset-button" onClick={() => dispatch(reset())}>Reset</button>
                <button className="counter-button" onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
