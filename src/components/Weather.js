import React from 'react';

const Weather = props => (
    <div>
        {props.city && <p>city: {props.city}</p>}
        {props.country && <p>country: {props.country}</p>}
        {props.temp && <p>tempature: {props.temp}</p>}
        {props.humidity && <p>humidity: {props.humidity}</p>}
        {props.des && <p>description: {props.des}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
)
export default Weather;
