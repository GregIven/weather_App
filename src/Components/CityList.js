import React from 'react';
import { WeatherContext } from '../WeatherContext';

const CityList = () => {
    const context = React.useContext(WeatherContext)

    console.log(context)
    return (
        <table className="city-list">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                </tr>
            </thead>
            <tbody>
                {context.cities.map((city, i) => (
                    <tr key={i}>
                        <td>{city.name}</td>
                        <td>{city.temperature}</td>
                    </tr>
                ))}
                {/* {context.cities} */}
            </tbody>
        </table>
    )
}

export default CityList
