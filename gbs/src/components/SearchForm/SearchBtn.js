import React from 'react'; 
import '../SearchForm/searchbtn.css'; 

function SearchBtn(props) {

    return( 
        <button className='search-btn'
        type='submit'
        {...props}>
            Search {props.children}
        </button>
    ); 
};
export default SearchBtn; 