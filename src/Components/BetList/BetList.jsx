import { AppData } from '../../constants';
import { filterAndSortItems } from '../../utils';
import BetItem from '../BetItem/BetItem';

import './BetList.css';

export const sortedAndFilteredItems  = filterAndSortItems(AppData)

const BetList = () => {
  return (
    <ul className='list'>
      {sortedAndFilteredItems.map(((item, id) => <BetItem key={id} id={id} item={item}/>))}
    </ul>
  );
}

export default BetList;
