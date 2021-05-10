import React from 'react';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.results = this.results.bind(this);
    }
    results(){
        return `About ${this.props.searchObject.data.searchInformation.formattedTotalResults} (${this.props.searchObject.data.searchInformation.searchTime}) `;
    }
    onClick(tab) {
        //add change page information here possibly send something up to main page
    }
    render() {
        return (
            <div className="row">
                <div className="col">
                    {this.results()}
                </div>
            </div>
        )
    }
}
//THE ICON WAS FAS WHICH WAS ABSOLUTE - YOU NEED TO MAKE IT RELATIVE OR SOMETHING ELSE