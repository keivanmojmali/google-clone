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
    handleSubmit(event){
        const term = event.target.value;
        this.props.setNewSearchTerm(term);
    }
    render(){
        return(
            <div className="row d-flex m-4">
                <div className="col-2 align-self-start">
                    <img src="https://www.google.com/logos/doodles/2021/celebrating-hisaye-yamamoto-6753651837109044-s.png" alt="googles main logo"/>
                </div>
                <div className="col ml-3">
                    <input type="text" className="main-font h-100 w-75"
                    onChange={this.onChange} handleSubmit={this.handleSubmit}
                    />
                </div>
            </div>
        )
    }
}