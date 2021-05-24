import React from 'react';
import PropTypes from 'prop-types'
const Weather = ({result,currentUnits}) => {
    const {main, name} = result;
    if(!name) return null;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Weather on {name} is:</h2>
                <p className="temperatura">
                    {main.temp} <span>&deg;{currentUnits}</span>
                </p>
                <p>The high will be: {main.temp_max} <span>&deg;{currentUnits}</span>
                </p>
                <p>The low will be: {main.temp_min} <span>&deg;{currentUnits}</span>
                </p>
            </div>
        </div>
        
     );
}
Weather.propTypes = {
    result: PropTypes.object.isRequired,
    currentUnits: PropTypes.string.isRequired
}
export default Weather;