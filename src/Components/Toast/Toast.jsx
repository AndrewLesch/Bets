import './Toast.css'

const Toast = ({selectedBet}) => {
  return (
    <div className='toast-container'>
      <span>{selectedBet.firstTeam}</span>
      <span>{selectedBet.secondTeam}</span>
      <span>{selectedBet.outcome}</span>
      <span>{selectedBet.coefficient}</span>
      <span>Ваша ставка принята!</span>
    </div>
  )
}

export default Toast;