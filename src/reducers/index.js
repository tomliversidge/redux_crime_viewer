import { combineReducers } from 'redux';
import CrimeDataReducer from './reducer_crime_data';

const rootReducer = combineReducers({
    crimeData: CrimeDataReducer
});

export default rootReducer;