import React from 'react'; 
import '../DeleteBtn/deletebtn.css';  

function DeleteBtn(props) {

    return(
        <button className='del-btn' type='submit' {...props}>
            Delete{props.children}
        </button>
    ); 
}; 
export default DeleteBtn; 