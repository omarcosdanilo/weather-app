import { Dispatch, SetStateAction, useState } from 'react';
import style from './Search.module.scss';
import Requester from '../../common/utils/Requester';
import { ApiResponse } from '../../interfaces/IApiResponse';

interface ISerchProps {
  setCityWeather: Dispatch<SetStateAction<ApiResponse>>;
  setFirstSearch: Dispatch<SetStateAction<boolean>>
}

function Search({ setCityWeather, setFirstSearch }: ISerchProps) {

  const [searchText, setSearchText] = useState('');

  async function searchWeather() {
    const response: ApiResponse = await Requester.getWeatherData(searchText);
    setCityWeather(response)
    setSearchText('');
    setFirstSearch(true);
  }

  return (  
    <form className={style.forms}>
      <label htmlFor='search-btn'>
        <input
          name='search-btn'
          id='search-btn'
          type="text"
          placeholder="Insira aqui o nome da cidade"
          value={searchText}
          onChange={ (e) => setSearchText(e.target.value) }
        />
        <img
          src='/images/searchIcon.png'
          alt='search icon'
          onClick={ () => searchWeather() }
        />
      </label>
    </form>
  )
}

export default Search;