import React from 'react';
import PropTypes from 'prop-types';

const TownItem = props => {
    const town = props.town
    return (
        <div className="townItem">
        <h4>{town.name}</h4>
        <div className="participents">
        {town.participents.map((p,i) => {
          return  i != town.participents.length -1 ? `${p}, ` : ` ${p}.` 
        })}
        </div>
        <div>Leader : {town.leader}</div>            
        </div>
    );
};


export default TownItem;