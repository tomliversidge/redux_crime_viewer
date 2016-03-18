import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CrimeDataList from '../containers/crime_data_list';
export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <CrimeDataList/>
            </div>
        );
    }
}
