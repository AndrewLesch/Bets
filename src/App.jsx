import './App.css';
import BetList from './Components/BetList/BetList';

const  App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className='header-logo'>BeTs.by</h1>
        <h3 className='header-description'>Ставим на спорт вместе!</h3>
        <button className='header-link'>На главную</button>
      </header>
      <h2 className='app-title'>События</h2>
      <BetList />
    </div>
  );
}

export default App;
