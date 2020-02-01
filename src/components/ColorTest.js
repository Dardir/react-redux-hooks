import React, { useState } from 'react';
import '../styles/ColorTest.css';

const ColorTest = () => {
    const [selectedColor, setSelectedColor] = useState('black');
    const [inputList, setInputList] = useState([]);

    const addInput = () => {
        console.dir(inputList);
        setInputList([...inputList, <input className={selectedColor} />]);
    }

    return (
        <div>
            <select onChange={(e) => setSelectedColor(e.target.value)}>
                <option value='white' >white</option>
                <option value='black' selected >black </option>
            </select>
            <br></br>
            <button onClick={() => addInput()}>
                Add Text Input
            </button>
            {inputList}

        </div>
    )
}

export default ColorTest;