import { useState } from 'react';
import { useParams } from 'react-router';
import { getFilteredAndSortedBets } from '../../utils';
import { useNavigate } from 'react-router-dom';

import './DetailsPage.css';

const DetailsPage = ({setBet}) => {
  const navigate = useNavigate()
  const params = useParams()
  const selectedBet = getFilteredAndSortedBets()[params.id]
  const [outcome, setOutcome] = useState('')

  try {
    if (selectedBet === undefined) {
      throw new Error('Ставка не найдена')
    }
  } catch (error) {
    console.error(error)
  }

  const onChangeOutcome = event => {
    setOutcome(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault();
    setBet(params.id, outcome)
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
        <span className='bet-form-coefficient'>Коэффициент на это событие <span className='coefficient'>{selectedBet.coefficient}</span></span>

        <div className='bet-inputs-container'>
          <input className='bet-input' onChange={onChangeOutcome} type='radio' value='На победу хозяев' id='win' name='outcome'/>
          <label className='input-label' htmlFor='win'>На победу хозяев</label>

          <input className='bet-input' onChange={onChangeOutcome} type='radio' value='На ничью' id='draw' name='outcome'/>
          <label className='input-label' htmlFor='draw'>На ничью</label>

          <input className='bet-input' onChange={onChangeOutcome} type='radio' value='На победу гостей' id='lose' name='outcome'/>
          <label className='input-label' htmlFor='lose'>На победу гостей</label>
        </div>

        <button className='bet-form-button' disabled={!outcome} type='submit'>Сделать ставку!</button>
      </form>
    </div>
  );
}

export default DetailsPage;
