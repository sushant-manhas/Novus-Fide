import { Link } from 'react-router-dom'
import Footer from '../LandingSection/Footer.jsx'
import CampainCard from '../ProfilePage/CampainCard.jsx'
import '../ProfilePage/Profile.css'
import './Subscribe.css'

function Subscribe() {
  return (
  <div>
    <div className='subscribe'>
      <div className='top-section'>
        <h1 className='subscribe-title'>Live Oppurtunities</h1>
        {/* <select name='sector'>
          <option disabled>Sector</option>
          <option value='fintech'>Fintech</option>
          <option value='healthcare'>Healthcare</option>
        </select> */}
      </div>
      <hr className='subscribe-hr'/>
      <div className='first-class'>
        <h1 className='class-heading'>CSOP's</h1>
        <p>Subsribe to fast growth business with low minimum</p>
        <div className='class-cards'>
          <Link to='/startup-sp'>
            <CampainCard />
          </Link >
          <Link to='/startup-sp'>
            <CampainCard />
          </Link >
          <Link to='/startup-sp'>
            <CampainCard />
          </Link >
          <Link to='/startup-sp'>
            <CampainCard />
          </Link >
        </div>
      </div>
      <div className='second-class'>
        <h1 className='class-heading'>Discounting</h1>
        <p>Short term fixed income Oppurtunities</p>
        <div className='class-cards'>
        <Link to='/startup-sp'>
            <CampainCard />
        </Link >
        <Link to='/startup-sp'>
            <CampainCard />
          </Link >
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Subscribe