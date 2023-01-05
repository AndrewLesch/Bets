import { AppData } from '../../constants';
import { filterAndSortItems } from '../../utils';
import BetItem from '../BetItem/BetItem';
import './BetList.css';

const BetList = () => {
  const sortedAndFilteredItems  = filterAndSortItems(AppData)
  
  return (
    <ul className='bet-list'>
      {sortedAndFilteredItems.map(((item, id) => <BetItem key={id} item={item}/>))}
    </ul>
  );
}

export default BetList;
