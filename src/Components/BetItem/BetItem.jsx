import './BetItem.css';

const BetItem = ({item}) => {
  return (
    <li className='bet-item'>
      <div className='bet-item--container'>
        <span className='bet-item--team'>{item.firstTeam}</span>
        <span className='bet-item-date'>{item.date}</span>
        <span className='bet-item--team'>{item.secondTeam}</span>
      </div>
      <div className='bet-item--container'>
        <span className='bet-item--category'>Категория</span>
        <span className='bet-item-coefficient'>{item.coefficient}</span>
        <span className='bet-item--category'>{item.category}</span>
      </div>
    </li>
  );
}

export default BetItem;
