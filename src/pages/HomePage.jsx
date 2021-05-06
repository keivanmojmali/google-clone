import React from 'react';
import NavBar from './NavBar';



export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit(event){
        event.preventDefault();
        const searchTerm = this.state.searchTerm;
        this.props.querryApi(searchTerm);
    }
    onChange(searchQuerry){
        const searchTerm = searchQuerry.target.value;
        this.setState({searchTerm});
    }
    render() {
        return (
            <div className="row m-0 p-0">
                <div className="col">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col d-flex justify-content-center align-items-center">
                                <img className='img-fluid w-50' src="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" alt="google logo" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center align-items-center">
                                <form action="#" className='search-bar' >
                                    <input type="text" className='w-100 main-font relative' value={this.state.searchTerm} 
                                    onChange={this.onChange}
                                    />
                                    <div className="row">
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <button type='submit' onClick={this.handleSubmit} className='btn btn-sm btn-muted p-1 m-2'> Google Search</button>
                                            <button type='button' className='btn btn-sm btn-muted p-1 m-2'>I'm Feeling Lucky</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col d-flex justify-content-center align-items-center">
                                <p>Everyone ages 16 and up can get the COVID-19 vaccine. <span className='text-primary m-5' href='https://www.google.com/search?q=covid+vaccine+near+me'>Find a vaccination site near you</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
