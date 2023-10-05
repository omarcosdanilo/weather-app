import { ApiResponse } from '../../interfaces/IApiResponse';
import style from './WeatherCard.module.scss';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'

interface IWeatherCardProps {
  cityInfo: ApiResponse
}
function WeatherCard({ cityInfo }: IWeatherCardProps) {
  const description = cityInfo
  ? cityInfo.weather[0].description.charAt(0).toUpperCase() + cityInfo.weather[0].description.slice(1)
  : '';
  return ( 
    <>
      <section className={style.container}>
      <div className={style.content}>
        <p className={style.cityName}>{`${cityInfo.name} - ${cityInfo.sys.country}`}</p>
        <h1>{`${cityInfo.main.temp.toFixed(1)}º ${description}`}</h1>
        <div className={style.cityWeather}>
          <div className={style.temperatureContainer}>
            <AiOutlineArrowDown />
            <p className={style.temperature}>{cityInfo.main.temp_min.toFixed(1)}</p>
          </div>
          <div className={style.temperatureContainer}>
            <AiOutlineArrowUp />
            <p className={style.temperature}>{cityInfo.main.temp_max.toFixed(1)}</p>
          </div>
          <div>
            <p>
              <span className={style.sensationText}>Sensação</span>
              <span className={style.sensationTempature}> {cityInfo.main.feels_like.toFixed(1)}</span>
            </p>
            </div>
        </div>
        <div className={style.infoContainer}>
          <p>
            <span className={style.infoText}>
              Vento
            </span>
            <span className={style.infoNumber}>
              {`${cityInfo.wind.speed}km/h`}
            </span>
          </p>
          <p>
            <span className={style.infoText}>
              Humidade 
            </span>
            <span className={style.infoNumber}>
            {`${cityInfo.main.humidity}%`}
            </span>
          </p>
        </div>
        <div className={style.line}></div>
      </div>
      </section>
    </>
   );
}

export default WeatherCard;