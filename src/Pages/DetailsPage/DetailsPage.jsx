import { useParams } from "react-router";
import { sortedAndFilteredItems } from "../../Components/BetList/BetList";

const DetailsPage = () => {
  let betId = useParams()
  const selectedBet = sortedAndFilteredItems[betId.id]
  return (
    <>
      <h2 className='app-title'>{selectedBet.date}</h2>
    </>
  );
}

export default DetailsPage;
