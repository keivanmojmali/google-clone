import React from 'react';

export default class SearchTopBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
        };

    };
    onChange(){
        event.preventDefault()
    }
    render(){
        return(
            <div className="row d-flex">
                <div className="col align-self-start">
                    <img src="https://www.google.com/logos/doodles/2021/celebrating-hisaye-yamamoto-6753651837109044-s.png" alt="googles main logo"/>
                </div>
                <div className="col">
                    <input type="text" className="main-font"
                    onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}