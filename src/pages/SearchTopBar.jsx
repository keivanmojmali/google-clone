import React from 'react';

export default class SearchTopBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    onChange(event){
        event.preventDefault();
        const newSearchTerm = event.target.value;
        this.setState(newSearchTerm);

    };
    handleSubmit(){
                //YOU NEED TO CHANGE THIS SO THAT THE THING THAT IS QUERRYING IS THE MAIN PAGE
        //AND NOT THE HOME PAGE - AND WHEN THIS NEW SEARCH TERM IS SO UP 
        //IT WILL ACTUALLY SEND A NEW QUERY AS WELL AND NOT JUST STATE HERE
    }
    render(){
        return(
            <div className="row d-flex">
                <div className="col align-self-start">
                    <img src="https://www.google.com/logos/doodles/2021/celebrating-hisaye-yamamoto-6753651837109044-s.png" alt="googles main logo"/>
                </div>
                <div className="col">
                    <input type="text" className="main-font"
                    onChange={this.onChange} handleSubmit={this.handleSubmit}
                    />
                </div>
            </div>
        )
    }
}