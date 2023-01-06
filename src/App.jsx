import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import HomePage from './Pages/HomePage/HomePage';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className='header-logo'>BeTs.by</h1>
        <h3 className='header-description'>Ставим на спорт вместе!</h3>
        <Link className='header-link' to="*">На главную</Link>
      </header>
      <Routes>
        <Route path='*' element={<HomePage/>} ></Route>
        <Route path='bets/:id' element={<DetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
