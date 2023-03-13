import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="container">
      <div className="card-container">
        <h1 className="heading">FAQS</h1>
        <ul className="faqs-list-container">
          {faqsList.map(each => (
            <FaqItem each={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
