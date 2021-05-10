import React from 'react';

export default class SearchTopBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
    };
    onChange(event){
        event.preventDefault();
        const newSearchTerm = event.target.value;
        this.setState(newSearchTerm);

    };
    onSubmit(event){
        const term = event.target.value;
        this.props.setNewSearchTerm(term);
    }
    render(){
        return(
            <div className="row d-flex ml-4 mt-4 border-bottom">
                <div className="col-2 align-self-start">
                    <img src="https://www.google.com/logos/doodles/2021/celebrating-hisaye-yamamoto-6753651837109044-s.png" alt="googles main logo"/>
                </div>
                <div className="col-6 ml-3 w-50">
            <div className="row">
                <div className="col">
                <input type="text" className="main-font h-100 w-100"
                    onChange={this.onChange} onSubmit={this.onSubmit}
                    />
                </div>
            </div>
            <div className="row mb-1">
                <div className="col">
                <ul className='d-flex justify-content-between align-items-center mb-0 mt-4 p-0'>
                    <li className='d-flex justify-content-center align-items-center '>
                        All
                    </li>
                    <li className='d-flex justify-content-center align-items-center '>
                        Shopping
                    </li>
                    <li className='d-flex justify-content-center align-items-center '>
                        Images
                    </li>
                    <li className='d-flex justify-content-center align-items-center '>
                        Videos
                    </li>
                    <li className='d-flex justify-content-center align-items-center '>
                        News
                    </li>
                </ul>
                </div>
            </div>
                </div>
            </div>
        )
    }
}
