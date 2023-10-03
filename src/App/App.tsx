import { useEffect, useState } from 'react';
import Capitals from '../components/Capitals';
import Header from '../components/Header';
import Search from '../components/Search';
import './App.module.scss';
import Requester from '../common/utils/Requester';
import capitalsList from '../common/data/capitalsList.json';
import { ApiResponse } from '../interfaces/IApiResponse';

function App() {
  const [capitalsWeather, setCapitalsWeather] = useState<ApiResponse[]>([]);

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
      <Search />
      <Capitals capitalsWeather={capitalsWeather} />
    </>
  );
}

export default App;
