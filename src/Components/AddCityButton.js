import React from 'react'
import { WeatherContext } from '../WeatherContext';


const AddCityButton = () => {
    const context = React.useContext(WeatherContext);

    const [name, setName] = React.useState('');

    // const submit = () => {
    //     const unit = 'imperial';
    //     const mode = 'json';
    //     const encodedName = encodeURIComponent(name);

    //     fetch(`https://community-open-weather-map.p.rapidapi.com/weather?
    //         units=${unit}&
    //         mode=${mode}&
    //         q=${encodedName}`,
    //     {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-key": "bc003baa91mshe3832653f97aeacp16a7fajsn7578784e324e",
    //         "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    //     }
    // })
    // .then(response => {
    //     console.log(response);
    //     if(response.status !== 200) throw new Error();
    //     return response.json();
    // }).then(json => {
    //     console.log(json);
    //     context.addCity(name, json.main.temp);
    //     setName('');
    // })
    // .catch(err => {
    //     console.error(err);
    // });

    // }

    const submit = () => {

        const API_KEY = '4cb192e459db0f503de68ecd35c8fde4'
        const ENCODED_CITY = encodeURIComponent(name)

        const URL = 'https://api.openweathermap.org'
        const ROUTE = `/data/2.5/weather?q=${ENCODED_CITY}&appid=${API_KEY}`


        fetch(`${URL}${ROUTE}`)
        .then(response => response.json())
        .then(json => {
            context.addCity(name, json.main.temp);
            setName('');
            console.log(json)
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div className="add-city-form">
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="input" onClick={submit}>Add</button>
        </div>
    )
}

export default AddCityButton
