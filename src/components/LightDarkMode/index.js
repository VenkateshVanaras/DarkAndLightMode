// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'light-is-on' : 'light-is-off'
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div className={modeClassName}>
          <h1>Click to Change Mode</h1>
          <button
            onClick={this.onClickButton}
            className="button-on"
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
