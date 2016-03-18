import axios from 'axios';

const ROOT_URL = "https://data.police.uk/api";
export const FETCH_CRIME_DATA = 'FETCH_CRIME_DATA';

export function fetchCrimeData(city) {
    const url = `${ROOT_URL}/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2013-01`;

    const request = axios.get(url);
    return {
        type: FETCH_CRIME_DATA,
        payload: request// payload key is 'magic' - middlewares look at this property
    };
}