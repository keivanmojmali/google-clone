import React from 'react';
import NavBar from './NavBar';

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };
    render(){
        return(
            <div className="container-fluid m-0 p-0">
                <div className="row">
                    <div className="col">
                        <NavBar  /> 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col d-flex justify-content-center align-items-center">
                            <img className='img-fluid w-50' src="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" alt="google photo"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {/* search bar goes here */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center align-items-center">
                                <button type='button' className='btn btn-sm btn-muted p-1 m-2'> Google Search</button>
                                <button type='button' className='btn btn-sm btn-muted p-1 m-2'>I'm Feeling Lucky</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Everyone ages 16 and up can get the COVID-19 vaccine.</p>
                                <a href="https://www.google.com/search?q=covid+vaccine+near+me">Find a vaccination site near you</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
