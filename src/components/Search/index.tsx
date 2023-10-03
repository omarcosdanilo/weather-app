import { useState } from 'react';
import style from './Search.module.scss';
import Requester from '../../common/utils/Requester';

function Search() {
  const [searchText, setSearchText] = useState('');

  function searchWeather() {
    Requester.getWeatherData(searchText);
    setSearchText('');
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