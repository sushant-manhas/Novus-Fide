import { Link } from 'react-router-dom'
import './StartUpSection.css'
import Footer from '../LandingSection/Footer'

function LandingSection(){
  return (
    <div>
    <section className='start-up-section'>
      <h1 className='start-up-section-text'>
        Funding your startup is easy with Novus Fide
      </h1>
      <p className='start-up-section-sub-text'>Community of 100,000 and growing users is there to support you.</p>
      <Link to="/fund-startup"><p className='start-up-section-btn'>Apply Now</p></Link>
    </section>
    <Footer />
    </div>
  )
}

export default LandingSection