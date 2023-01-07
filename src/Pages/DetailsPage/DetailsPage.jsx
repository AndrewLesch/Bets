import { useState } from 'react';
import { useParams } from 'react-router';
import { sortedAndFilteredItems } from '../../Components/BetList/BetList';
import { useNavigate } from 'react-router-dom';

import './DetailsPage.css';

const DetailsPage = ({getSelectedBet}) => {
  const navigate = useNavigate()
  const betId = useParams()
  const selectedBet = sortedAndFilteredItems[betId.id]
  const [outcomeIsActive, setOutcomeIsActive] = useState(false);

  const onChangeOutcome = event => {
    setOutcomeIsActive(true);
    selectedBet.outcome = event.target.value;
  }

  const onSubmitForm = event => {
    event.preventDefault();
    getSelectedBet(selectedBet)
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='details-container'>
          <span className='details-container-text'>{selectedBet.firstTeam}</span>
          <span className='details-container-text'>{selectedBet.date}</span>
          <span className='details-container-text'>{selectedBet.secondTeam}</span>
      </div>
      <form className='bet-form' onSubmit={onSubmitForm}>
        <span className='bet-form-coefficient'>Коэффициент на это событие <b>{selectedBet.coefficient}</b></span>

        <div className='bet-inputs-container'>
          <input className='bet-input' onChange={onChangeOutcome} type={'radio'} value='На победу хозяев' id='win' name='outcome'/>
          <label className='input-label' htmlFor='win'>На победу хозяев</label>

          <input className='bet-input' onChange={onChangeOutcome} type={'radio'} value='На ничью' id='draw' name='outcome'/>
          <label className='input-label' htmlFor='draw'>На ничью</label>

          <input className='bet-input' onChange={onChangeOutcome} type={'radio'} value='На победу гостей' id='lose' name='outcome'/>
          <label className='input-label' htmlFor='lose'>На победу гостей</label>
        </div>

        <button className='bet-form-button' disabled={!outcomeIsActive} type='submit'>Сделать ставку!</button>
      </form>
    </div>
  );
}

export default DetailsPage;
