import style from './WeatherCard.module.scss';

function WeatherCard() {
  return ( 
    <>
      <section className={style.container}>
        <div className={style.content}>
          <p className={style.cityName}>Niteroi, RJ - Brasil</p>
          <h1>20ºC Nublado</h1>
          <div className={style.cityWeather}>
            <div><p className={style.temperature}>16º</p></div>
            <div><p className={style.temperature}>25º</p></div>
            <div>
              <p>
                <span className={style.sensationText}>Sensação</span>
                <span className={style.sensationTempature}> 19ºC</span>
              </p>
              </div>
          </div>
          <div className={style.infoContainer}>
            <p>
              <span className={style.infoText}>
                Vento
              </span>
              <span className={style.infoNumber}>
                18km/h
              </span>
            </p>
            <p>
              <span className={style.infoText}>
                Humidade 
              </span>
              <span className={style.infoNumber}>
                89%
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