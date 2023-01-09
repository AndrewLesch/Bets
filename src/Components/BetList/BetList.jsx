import { useMemo } from 'react';
import { getFilteredAndSortedBets } from '../../utils';
import BetItem from '../BetItem/BetItem';

import './BetList.css';

const BetList = () => {
  const sortedAndFilteredItems = useMemo(() =>  getFilteredAndSortedBets(), [])
  return (
    <ul className='list'>
      {sortedAndFilteredItems.map(((item, id) => <BetItem key={id} id={id} item={item}/>))}
    </ul>
  );
}

export default BetList;
