import React from 'react';
import '../SearchForm/searchform.css';
import '../SearchForm/Input'; 
import '../SearchForm/SearchBtn';   

function SearchForm(props) {

    return(
        <div className='form-container'>
            <form className='form' {...props}>
                <h3 className='form-heading'>Book Search</h3>
                {/* <Input /> */}

                {/* <SearchBtn /> */}

            </form>
        </div>
    ); 
}; 
export default SearchForm; 