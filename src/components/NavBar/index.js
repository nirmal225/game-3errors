import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <nav className="navbar">
      <div className="responsive-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          className="website-logo"
          alt="website logo"
        />
        <div className="score-container">
          <p className="score">
            Score: <span className="score-timer">{score}</span>
          </p>
          <div className="timer-container">
            <img
              alt="timer"
              className="timer-image"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            />
            <p className="score-timer">{timer} sec</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
