import React from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import SearchResults from './SearchResults';

export default class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchObject: null,
        };
        this.setSearchTerms = this.setSearchTerms.bind(this);
        this.currentPage = this.currentPage.bind(this);
    };
    setSearchTerms(searchObject){
        this.setState({searchObject});
        
    }
    currentPage(){
        if(this.state.searchObject === null) {
            return <HomePage setSearchTerms={this.setSearchTerms} />
        } else {
            return <SearchResults searchObject={this.state.searchObject} />
        };
    }
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
                    {this.currentPage()}
                    </div>
                </div>
            </div>
        )
    }
}