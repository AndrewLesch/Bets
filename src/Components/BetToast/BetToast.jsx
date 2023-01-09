import './BetToast.css'

const BetToast = ({selectedBet}) => {
  return (
    <div className='toast-container'>
      <p className='toast-teams'>Спасибо, ваша ставка на матч {selectedBet.firstTeam} | {selectedBet.secondTeam}</p>
      <p className='toast-outcome'>На исход: {selectedBet.outcome}</p>
      <p className='toast-submit'>Принята!</p>
    </div>
  )
}

export default BetToast;