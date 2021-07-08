import React from 'react'; 
import '../SearchResult/displayresult.css'; 

function DisplayResult({children}) {

    return(
        <div className='display-results-container'>
            <ul className='result-list'>{children}

            </ul>
        </div>
    ); 

};
export default DisplayResult; 