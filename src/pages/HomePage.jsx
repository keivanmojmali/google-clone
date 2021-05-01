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
            </div>
        )
    }
}
