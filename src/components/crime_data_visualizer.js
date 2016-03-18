import React from 'react';
import _ from 'lodash';

export default (props) =>{
    return (
        <div>
            {Object.keys(props.data).map(function(key) {
                return <div>{key} : {props.data[key]}</div>;
            })}
        </div>
    )
}
