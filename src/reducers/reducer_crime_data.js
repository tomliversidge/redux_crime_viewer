import {FETCH_CRIME_DATA} from '../actions/fetch_crime_data'
import _ from 'lodash'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CRIME_DATA:
            console.log("current state is", state);
            console.log("current action is", action);
            console.log("action payload", action.payload);
            // do not mutate state! The method below creates a new array (ES6 syntax)
            const newState = [
                {
                    url: action.payload.config.url,
                    data: action.payload.data
                }, ...state];// state.concat([action.payload.data]);
            console.log("new state", newState);
            return newState;

    }
    return state;
}    