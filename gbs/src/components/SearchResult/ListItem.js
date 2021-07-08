import React from 'react'; 
import '../SearchResult/listitem.css'; 

function ListItem({children}){

    return(
        <li className='result-list-item'>{children}</li> 
    );
}; 
export default ListItem; 