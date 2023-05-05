import {Link } from 'react-router-dom'
import Footer from './Footer'
import './LandingSection.css'

function LandingSection(){
  return (
    <div>
      <section className='landing-section'>
        <h1 className='landing-section-text'>
          Multiply your wealth and achieve sky rocketing returns on your investments
        </h1>
        <p className='landing-section-sub-text'>Your very own platform for exclusive opputunities</p>
        <Link to='signup'><p className='landing-section-btn'>Get Started</p></Link>
      </section>
      <div className='reimagined'>Investing Reimagined</div>
      <div className='alternate-ways'>
        <div className='alternate-card'>
          <h1 className='alternate-card-text'>Raise By CSOPs</h1>
          <p className='alternate-card-sub-text'>Raise funds by through CSOP pool in company</p>
        </div>
        <div className='alternate-card'>
          <h1 className='alternate-card-text'>Raise By AIF</h1>
          <p className='alternate-card-sub-text'>Raise funds through AIF's not directly investing</p>
        </div>
        <div className='alternate-card'>
          <h1 className='alternate-card-text'>Raise By Equity</h1>
          <p className='alternate-card-sub-text'>Raise funds through AIF's not directly investing</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingSection