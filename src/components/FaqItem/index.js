// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActiveQuestion: false}

  onClickAnswer = () => {
    this.setState(prevState => ({
      isActiveQuestion: !prevState.isActiveQuestion,
    }))
  }

  showAnswer = () => {
    const {each} = this.props
    const {answerText} = each
    return (
      <div className="answer-container">
        <p className="ans-para">{answerText}</p>
      </div>
    )
  }

  render() {
    const {isActiveQuestion} = this.state
    const {each} = this.props
    const {questionText} = each
    const image = isActiveQuestion
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imageAlt = isActiveQuestion ? 'minus' : 'plus'
    return (
      <li className="container-list-items">
        <div className="faq-questions-container">
          <h1 className="question">{questionText}</h1>
          <button
            onClick={this.onClickAnswer}
            type="button"
            className="plus-minus-button"
          >
            <img src={image} alt={imageAlt} />
          </button>
        </div>
        <hr className="line" />
        {isActiveQuestion && this.showAnswer()}
      </li>
    )
  }
}
export default FaqItem
