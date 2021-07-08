import React from 'react';
import '../SearchForm/input.css'; 

function Input(props) {

    return(
        <div className='input-container'>
            <label htmlFor='input'>Search for a Book</label>
            <input className='input' type='text' {...props}></input>
        </div>
    ); 
}; 
export default Input; 