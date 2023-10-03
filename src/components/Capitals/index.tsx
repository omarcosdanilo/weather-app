import { ApiResponse } from '../../interfaces/IApiResponse';
import style from './Capitals.module.scss';

interface CapitalsWeatherProps {
  capitalsWeather: ApiResponse[]
}
function Capitals({ capitalsWeather }: CapitalsWeatherProps) {
  return (
    <>
    <div className={style.container}>
      <h2>Capitais</h2>
        <table className={`table table-borderless`}>
          <thead>
            <tr>
              <th>Min</th>
              <th>Max</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {
              capitalsWeather.map(capital => (
                  <tr key={capital.id}>
                    <td>{capital.main.temp_min.toFixed(1) + 'º'}</td>
                    <td>{capital.main.temp_max.toFixed(1) + 'º'}</td>
                    <td>{capital.name}</td>
                  </tr>
              ))
            }
          </tbody>
        </table>
    </div>
    </>
  )
}

export default Capitals;