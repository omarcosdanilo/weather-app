import style from './Capitals.module.scss';

function Capitals() {
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
              <th>Min</th>
              <th>Max</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18</td>
              <td>27</td>
              <td>Rio de Janeiro</td>
              <td>23</td>
              <td>37</td>
              <td>Salvador</td>
            </tr>
            <tr>
              <td>18</td>
              <td>27</td>
              <td>Rio de Janeiro</td>
              <td>23</td>
              <td>37</td>
              <td>Salvador</td>
            </tr>
            <tr>
              <td>18</td>
              <td>27</td>
              <td>Rio de Janeiro</td>
              <td>23</td>
              <td>37</td>
              <td>Salvador</td>
            </tr>
          </tbody>
        </table>
    </div>
    </>
  )
}

export default Capitals;