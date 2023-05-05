import './card.css'
import leftQuote from '../../assets/left-quote.png'

function Card() {
  return (
    <div className='card'>
      <img src={leftQuote} alt="left-quote-img" />
      <p className='card-text'>
        This is something great which is my motto so I am going to write.
      </p>
      <br />
      <p className='card-name-section'>turret0p</p>
      <p className='card-designation'>Chief Technical Officer</p>
      <p className='card-designation'>Novus</p>
    </div>
  )
}

export default Card