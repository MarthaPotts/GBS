import React from 'react'; 
import '../Header/header.css'; 

function Header(props) {

    return(
        <div className='header-container'>
            <header className='header-title'>
                <h1 className='header-text'>
                    <span className="header-span">GBS</span> : a react google books search
                </h1>
                <div className='header-descr'>
                    <h3 className='header-desc-text'>Books of Interest</h3>
                </div>
            </header>
        </div>
    ); 
}
export default Header;