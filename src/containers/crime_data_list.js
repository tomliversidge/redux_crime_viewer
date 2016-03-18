import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SimpleLineChart from '../components/simple_line_chart';
import CrimeDataVisualizer from '../components/crime_data_visualizer'
class CrimeDataList extends Component {
    constructor(props){
        super(props);

        // take the existing function, and replace with a bound one
        this.renderCrimeData = this.renderCrimeData.bind(this);
    }

    renderCrimeData(crimeData) {
        console.log("inside view..", crimeData);

        const asb = _.countBy(crimeData.data, 'category');
        console.log(asb);

        return (
                <tr key={crimeData.url}>
                <td>
                    <CrimeDataVisualizer data={asb}/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Anti Social Behaviour</th>
                </tr>
                </thead>
                <tbody>
                {console.log(this.props.crimeData)}
                {this.props.crimeData.map(this.renderCrimeData)}
                </tbody>
            </table>
        )
    }
}

// give access to this.props.weather above
function mapStateToProps({ crimeData }) {
    return {crimeData};
}

export default connect(mapStateToProps)(CrimeDataList);