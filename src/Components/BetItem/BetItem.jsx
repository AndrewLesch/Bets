import { Link } from 'react-router-dom';

import './BetItem.css';

const BetItem = ({item, id}) => {
  return (
    <Link to={`bets/${id}`} className='item-link'>
      <li className='item'>
        <div className='item-container'>
          <span className='item-team'>{item.firstTeam}</span>
          <span className='item-date'>{item.date}</span>
          <span className='item-team'>{item.secondTeam}</span>
        </div>
        <div className='item-container'>
          <span className='item-category'>Категория</span>
          <span className='item-coefficient'>{item.coefficient}</span>
          <span className='item-category'>{item.category}</span>
        </div>
      </li>
    </Link>
  );
}

export default BetItem;
