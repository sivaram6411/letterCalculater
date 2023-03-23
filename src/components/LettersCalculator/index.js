// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    const wordLength = event.target.value
    console.log(wordLength)
    this.setState({searchInput: wordLength})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image-logo"
        />
        <div className="sub-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-label-container">
            <label htmlFor="inputId" className="label">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input"
              placeholder="Enter the phrase"
              value={searchInput}
              onChange={this.onChangeInput}
              id="inputId"
            />
          </div>
          <div className="letters-count-container">
            <p>No.of letters: {searchInput.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
