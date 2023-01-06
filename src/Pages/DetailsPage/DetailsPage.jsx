import { useParams } from "react-router";
import { sortedAndFilteredItems } from "../../Components/BetList/BetList";

const DetailsPage = () => {
  const betId = useParams()
  const selectedBet = sortedAndFilteredItems[betId.id]

  const saveBet = (event) => {
    event.preventDefault();
    window.location.href = '/'
  }

  return (
    <div>
      <div className='bet-item--container'>
          <span className='bet-item--team'>{selectedBet.firstTeam}</span>
          <span className='bet-item-date'>{selectedBet.date}</span>
          <span className='bet-item--team'>{selectedBet.secondTeam}</span>
      </div>
      <form>
        <span>Коэффициент на это событие  {selectedBet.coefficient}</span>
        <input type='radio' name='bet-input'/>
        <label for='contactChoice1'>На победу хозяев</label>

        <input type='radio' name='bet-input' />
        <label>На ничью</label>

        <input type='radio' name='bet-input' />
        <label>На победу гостей</label>

        <button onClick={saveBet} type='submit'>Сделать ставку!</button>
      </form>
    </div>
  );
}

export default DetailsPage;
