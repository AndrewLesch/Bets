import './Toast.css'

const Toast = ({selectedBet}) => {
  return (
    <div className="toast-container">
      <h4>{selectedBet.firstTeam}</h4>
      <h4>{selectedBet.secondTeam}</h4>
      <h4>{selectedBet.outcome}</h4>
      <h4>{selectedBet.coefficient}</h4>
      <h4>Ваша ставка принята!</h4>
    </div>
  )
}

export default Toast;