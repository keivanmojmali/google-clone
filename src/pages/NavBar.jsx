import React from 'react';

export default class NavBar extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg bg-light navbar-light">
                <button className="navbar-toggler" type='button' data-toggle='collapse' data-target='#navbarSupportedContent' 
                aria-controls='navbarSupportedContent'  aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse d-flex align-items-center justify-content-between main-font' id='navbarSupportedContent'>
                    <div>
                        <a href="#" className='list-unstyled m-4'>About</a>
                        <a href="#" className='list-unstyled'>Store</a>
                    </div>
                    <div>
                        <a href="#" className='list-unstyled'>Gmail</a>
                        <a href="#" className='list-unstyled m-4'>Images</a>
                    </div>

                </div>



            </nav>
        )
    }
}