import React from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';

export default class MainPage extends React.Component {
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
                        <NavBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <HomePage />
                    </div>
                </div>
            </div>
        )
    }
}