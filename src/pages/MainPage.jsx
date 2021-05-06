import React from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import SearchResults from './SearchResults';
import SearchTopBar from './SearchTopBar';

export default class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchObject: '', //Once you are done editing this code - change to null,
            searchTerm: '',
        };
        this.currentPage = this.currentPage.bind(this);
        this.querryApi = this.querryApi.bind(this);
        this.returnTopBar = this.returnTopBar.bind(this);
        this.setNewSearachTerm = this.setNewSearachTerm.bind(this);
    };
    querryApi(searchTerm){

        fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAC_94jn8Bj1CWIaCnmf55ya61W3QOHAFI&cx=60e7b95840ba1222b&q=${searchTerm}`)
        .then(result => {
            return result.json();
        })
        .then(data =>{
            const searchObject = {
                searchTerm,
                data,
            };
            this.setState({searchObject});

        })
        .catch( err=> {
            console.error(err);
        })
    }
    currentPage(){
        if(this.state.searchObject === null) {
            return <HomePage querryApi={this.querryApi} />
        } else {
            return <SearchResults searchObject={this.state.searchObject} />
        };
    }
    returnTopBar() {
        return (this.state.searchObject === null ? <NavBar /> : <SearchTopBar setNewSearachTerm={this.setNewSearachTerm} />)
    }
    setNewSearachTerm(term){
        this.setState({searchTerm: term});

    }
    render(){
        return(
            <div className="container-fluid m-0 p-0">
                <div className="row">
                    <div className="col">
                        {this.returnTopBar()}
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