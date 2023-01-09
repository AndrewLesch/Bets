import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BetToast from './components/BetToast/BetToast';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import HomePage from './pages/HomePage/HomePage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { getFilteredAndSortedBets } from './utils';

import './App.css';

const App = () => {
  const [selectedBet, setSelectedBet] = useState({})
  const [isNotificationVisible, setIsNotificationVisible] = useState(false)

  const setBet = (id, outcome) => {
    const bet = getFilteredAndSortedBets().find((_, i) => i === +id)
    bet.outcome = outcome
    setSelectedBet(bet)

    setIsNotificationVisible(true)
    setTimeout(() => setIsNotificationVisible(false), 3000)
  }

  return (
    <ErrorBoundary>
      <div className='app'>
        <header className='app-header'>
          <h1 className='header-logo'>BeTs.by</h1>
          <h3 className='header-description'>Ставим на спорт вместе!</h3>
          <Link className='header-link' to='*'>На главную</Link>
        </header>

        {isNotificationVisible && (<BetToast selectedBet={selectedBet}></BetToast>)}

        <Routes>
          <Route path='*' element={<HomePage/>} ></Route>
          <Route path='bets/:id' element={<DetailsPage setBet={setBet}/>}></Route>
        </Routes>
      </div>
    </ErrorBoundary>
  )
}

export default App;
