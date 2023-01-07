import { useState } from "react";
import { useParams } from "react-router";
import { sortedAndFilteredItems } from "../../Components/BetList/BetList";
import { useNavigate } from "react-router-dom";

import './DetailsPage.css';

const DetailsPage = ({getBet}) => {
  const navigate = useNavigate()
  const betId = useParams()
  const selectedBet = sortedAndFilteredItems[betId.id]
  const [betIsActive, setBetIsActive] = useState(false);

  
  const setBet = (event) => {
    setBetIsActive(true);
    selectedBet.outcome = event.target.value;
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    getBet(selectedBet)
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
        <input onChange={setBet} type={'radio'} value='На победу хозяев' id='win' name='bet'/>
        <label htmlFor='win'>На победу хозяев</label>

        <input onChange={setBet} type={'radio'} value='На ничью' id='draw' name='bet'/>
        <label htmlFor='draw'>На ничью</label>

        <input onChange={setBet} type={'radio'} value='На победу гостей' id='lose' name='bet'/>
        <label htmlFor='lose'>На победу гостей</label>

        <button disabled={!betIsActive} type='submit'>Сделать ставку!</button>
      </form>
    </div>
  );
}

export default DetailsPage;
