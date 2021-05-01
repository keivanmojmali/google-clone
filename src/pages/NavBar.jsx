import React from 'react';

export default class NavBar extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg bg-light navbar-light">
                <button className="navbar-toggler" type='button' data-toggle='collapse' data-target='#navbarSupportedContent' 
                aria-controls='navbarSupportedContent'  aria-expand='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>



            </nav>
        )
    }
}