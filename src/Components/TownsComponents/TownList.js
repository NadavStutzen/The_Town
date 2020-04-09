import React from 'react';
import PropTypes from 'prop-types';
import TownItem from './TownItem';
const towns = [{name : 'First',participents:['danny','ronny'],leader : 'ronny'},{name : 'second',participents:['danny','ronny'],leader : 'danny'},{name : 'third',participents:['danny','Mark'],leader : 'Mark'}]
const TownList = props => {
    return (
        <div className="townList">
            {towns.map(t => {
                return <TownItem town={t}/>
            })}
        </div>
    );
};


export default TownList;