
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Toast from './Components/Toast/Toast';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import HomePage from './Pages/HomePage/HomePage';

const App = () => {
  const [selectedBet, setSelectedBet] = useState({})
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  const getBet = (selectedBet) => {
    setSelectedBet(selectedBet)
    setIsPopUpOpen(true)
  }

  console.log(selectedBet)
  return (
    <div className="app">
      <header className="app-header">
        <h1 className='header-logo'>BeTs.by</h1>
        <h3 className='header-description'>Ставим на спорт вместе!</h3>
        <Link className='header-link' to="/">На главную</Link>
      </header>
      {isPopUpOpen && (<Toast selectedBet={selectedBet}></Toast>)}
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='bets/:id' element={<DetailsPage getBet={getBet}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
