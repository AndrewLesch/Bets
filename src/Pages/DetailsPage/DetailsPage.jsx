import { useState } from "react";
import { useParams } from "react-router";
import { sortedAndFilteredItems } from "../../Components/BetList/BetList";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div className=''>
          <span className=''>{selectedBet.firstTeam}</span>
          <span className=''>{selectedBet.date}</span>
          <span className=''>{selectedBet.secondTeam}</span>
      </div>
      <form  onSubmit={onSubmitForm}>
        <span>Коэффициент на это событие  {selectedBet.coefficient}</span>
        <input onChange={onChangeOutcome} type={'radio'} value='На победу хозяев' id='win' name='outcome'/>
        <label htmlFor='win'>На победу хозяев</label>

        <input onChange={onChangeOutcome} type={'radio'} value='На ничью' id='draw' name='outcome'/>
        <label htmlFor='draw'>На ничью</label>

        <input onChange={onChangeOutcome} type={'radio'} value='На победу гостей' id='lose' name='outcome'/>
        <label htmlFor='lose'>На победу гостей</label>

        <button disabled={!outcomeIsActive} type='submit'>Сделать ставку!</button>
      </form>
    </div>
  );
}

export default DetailsPage;
