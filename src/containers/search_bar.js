import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCrimeData } from '../actions/fetch_crime_data';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { latlong : "" };

        // take the existing function, and replace with a bound one
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        // the 'this' reference below needs binding in the ctor above
        this.setState({latlong: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchCrimeData(this.state.latlong); // call the API
        this.setState({ latlong : ''}); // reset the user input
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get crime data by lat,long"
                    className="form-control"
                    value={this.state.latlong}
                    onChange={this.onInputChange}/>

                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchCrimeData}, dispatch);
}
// null because there is no state to pass
export default connect(null, mapDispatchToProps)(SearchBar);