import { useEffect, useState } from 'react';
import Capitals from '../components/Capitals';
import Header from '../components/Header';
import Search from '../components/Search';
import './App.module.scss';
import Requester from '../common/utils/Requester';
import capitalsList from '../common/data/capitalsList.json';
import { ApiResponse } from '../interfaces/IApiResponse';
import WeatherCard from '../components/WeatherCard';

function App() {
  const [capitalsWeather, setCapitalsWeather] = useState<ApiResponse[]>([]);
  const [cityWeather, setCityWeather] = useState<ApiResponse>({
    "coord": {
      "lon": -43.2075,
      "lat": -22.9028
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "nublado",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 26.66,
      "feels_like": 26.66,
      "temp_min": 23.86,
      "temp_max": 29.12,
      "pressure": 1006,
      "humidity": 76
    },
    "visibility": 10000,
    "wind": {
      "speed": 6.17,
      "deg": 180
    },
    "clouds": {
      "all": 75
    },
    "dt": 1696528624,
    "sys": {
      "type": 1,
      "id": 8429,
      "country": "BR",
      "sunrise": 1696494583,
      "sunset": 1696539164
    },
    "timezone": -10800,
    "id": 3451190,
    "name": "Rio de Janeiro",
    "cod": 200
  });
  const [firstSearch, setFirstSearch] = useState<boolean>(false);

  useEffect(() => {
    async function getCapitalsData() {
      const response = await Requester.getCapitalsData(capitalsList);
      
      if (response !== undefined) {
        setCapitalsWeather(response);
      }
    } 
    getCapitalsData();
  }, [])
  return (
    <>
      <Header title="Previsão do tempo" />
      {
        firstSearch &&  <WeatherCard cityInfo={cityWeather}/>
      }
      <Search setCityWeather={setCityWeather} setFirstSearch={setFirstSearch}/>
      <Capitals capitalsWeather={capitalsWeather} />
    </>
  );
}

export default App;
