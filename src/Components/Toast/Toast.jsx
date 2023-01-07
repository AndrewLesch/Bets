import './Toast.css'

const Toast = ({selectedBet}) => {
  return (
    <div className='toast-container'>
      <h3 className='toast-container-comands'>Спасибо, ваша ставка на матч {selectedBet.firstTeam} | {selectedBet.secondTeam}</h3>
      <h4 className='toast-container-outcome'>На исход: {selectedBet.outcome}</h4>
      <h4 className='toast-container-submit'>Принята!</h4>
    </div>
  )
}

export default Toast;