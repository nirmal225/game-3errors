import './index.css'

const Results = props => {
  const {score, reset} = props

  const onResetScore = () => {
    reset()
  }

  return (
    <div className="score-card-container">
      <img
        alt="trophy"
        className="trophy-image"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
      />
      <p className="your-score">Your Score</p>
      <p className="score">{score}</p>

      <button
        type="button"
        className="play-again-button"
        onClick={onResetScore}
      >
        <img
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        />
        Play Again
      </button>
    </div>
  )
}

export default Results
