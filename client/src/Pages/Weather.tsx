import { useState } from "react"

const Weather = () => {
const [cityName, setCityName] = useState('');
const [weatherData, setWeatherData] = useState({});

const citySearch = (e:any):void => {
    setCityName(e.target.value);
    console.log(e.target.value);

}

// free weather api
// https://wttr.in/{city}?format=j1


const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
    // Add more cities as needed
  ];
  
    const [query, setQuery] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);
  
    const handleChange = (event:any) => {
      const input = event.target.value;
      setQuery(input);
  
      // Filter cities based on the input
      if (input) {
        const filtered = cities.filter(city =>
          city.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredCities(filtered);
      } else {
        setFilteredCities([]);
      }
    };
  
    const handleSelectCity = async (city:any) => {
      setQuery(city);
      const data = await fetch(`https://wttr.in/${city}?format=j1`,).then(response => response.json()).then(response => setWeatherData(response));
      console.log(weatherData.weather[0].avgtempC);
      setFilteredCities([]);
    };
  
  

  return (
    <div className="w-screen h-screen flex flex-col items-center p-2">
      <h1 className="border h-fit w-fit p-4">Hello its a weather app</h1>
      <div className="w-full h-28  p-2 rounded mt-10 flex flex-col items-center">
      <label htmlFor="city-search" className="block text-sm font-medium text-gray-700">Search City</label>
        <input type="text" id="city-search" value={query} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline" placeholder="Type a city name"/>
        {filteredCities.length > 0 && (
          <ul className="mt-2 w-full border border-gray-300 rounded-md bg-white z-10">
            {filteredCities.map((city, index) => (
              <li key={index} onClick={() => handleSelectCity(city)} className="cursor-pointer hover:bg-blue-100 p-2">
                {city}
              </li>
            ))}
          </ul>
        )}
        
      </div>
      <div>Weather Data
        <div>{weatherData?.weather[0].avgtempC}</div>
      </div>
    </div>
  )
}

export default Weather
