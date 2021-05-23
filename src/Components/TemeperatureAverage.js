import React from 'react'
import { WeatherContext } from '../WeatherContext';

const TemeperatureAverage = () => {
    const context = React.useContext(WeatherContext);

    if(context.cities.length === 0) {
        return (
            <div>Add some cities to view their avg temps</div>
        )
    };

    let total = 0;
    for (const city of context.cities) {
        total += city.temperature;
    }
    const avg = total / context.cities.length;

    return (
        <div>
            The average is <b>{avg.toFixed(2)}</b> degrees Fahrenheit.
        </div>
    )
}

export default TemeperatureAverage
