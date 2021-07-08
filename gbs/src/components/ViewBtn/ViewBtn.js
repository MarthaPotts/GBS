import React from 'react'; 
import '../ViewBtn/viewbtn.css'; 

function ViewBtn(props) {
    
    return(
        <button className='vw-btn'
        type='submit'{...props}>View{props.children}</button>
    ); 
}; 
export default ViewBtn; 