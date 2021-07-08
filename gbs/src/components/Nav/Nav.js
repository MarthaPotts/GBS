import React from 'react'; 
import '../Nav/nav.css'; 

function Nav(props) {
    
    return(
        <div className='nav-container'>
            <nav className='nav-menu'>
                <ul className='nav-list'>
                    <a className='nav-link' href="/">
                        <li className='nav-li' {...props}>
                            Search
                        </li>
                    </a>
                    <a href="/" className='nav-link'>
                        <li className='nav-li' {...props}>
                            Save
                        </li>
                    </a>
                </ul>
            </nav>
        </div>
    ); 
}; 
export default Nav; 