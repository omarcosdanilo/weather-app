import Capitals from '../components/Capitals';
import Header from '../components/Header';
import Search from '../components/Search';
import './App.module.scss';

function App() {
  return (
    <>
      <Header title="Previsão do tempo" />
      <Search />
      <Capitals />
    </>
  );
}

export default App;
