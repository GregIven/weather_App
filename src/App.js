import './App.css';
import React from 'react';
import AddCityButton from './Components/AddCityButton';
import CityList from './Components/CityList';
import TemeperatureAverage from './Components/TemeperatureAverage';
import { WeatherContext } from './WeatherContext';

function App() {

const [cities, setCities] = React.useState([]);

const addCity = (name, temperature) => {
  const newCity = { name, temperature };
  setCities(prevCities => [...prevCities, newCity]);
}

  return (
      <WeatherContext.Provider value={{
        cities,
        addCity,
      }}>
        <div className="city-overview">
          <h2>Multi-Weather App</h2>
          <CityList />
          <AddCityButton />
          <TemeperatureAverage />
        </div>
      </WeatherContext.Provider>
    
  );
}

export default App;
