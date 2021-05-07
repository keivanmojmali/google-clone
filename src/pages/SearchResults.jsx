import React from 'react';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    onClick(tab) {
        //add change page information here possibly send something up to main page
    }
    render() {
        return (
            <div className="row border-bottom">
                <div className="col">
                    <div className='d-flex justify-content-center'>
            
                        <p>All</p>
                    </div>
                </div>
            </div>
        )
    }
}
//THE ICON WAS FAS WHICH WAS ABSOLUTE - YOU NEED TO MAKE IT RELATIVE OR SOMETHING ELSE