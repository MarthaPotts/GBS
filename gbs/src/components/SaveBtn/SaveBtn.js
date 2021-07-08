import React from 'react';
import '../SaveBtn/savebtn.css'; 

function SaveBtn(props) {

    return(
        <button className='save-btn' type='submit' {...props}>Save{props.children}</button>
    ); 
}; 
export default SaveBtn; 