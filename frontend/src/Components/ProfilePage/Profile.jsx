import { useNavigate,Link } from "react-router-dom"
import { UserContext } from "../UserContext"
import { useContext } from "react"
import './Profile.css'
import Footer from '../LandingSection/Footer.jsx'
import handWave from '../../assets/wave.png'
import CampainCard from "./CampainCard"

function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useContext(UserContext)
  

  return (
    <div>
    <div className='profile-page'>
      <p className='welcome-text'>
        <span className='welcome-hand-wave'><img src={handWave} alt="Hand wave"/></span>
        Welcome 
        <span className='welcome-user-name'>{' '+user}</span>
      </p>
      <div className='profile-section'>
        <div className='profile-get-started'>
          <h2>Get Started</h2>
          <p>You are this closer to grow your wealth and start your journey with Novus Fide</p>
        </div>
      </div>
      <div className="profile-steps-completed">
        <p className='profile-step-1'>Create your profile</p>
        <hr />
        <p className='profile-step-2'>Complete KYC and share bank account details</p>
        <hr />
        <p className='profile-step-3'>Subscribe and sign documents</p>
        <hr />
      </div>
      <div className='live-campains'>
        <h2>Live Campaigns</h2>
        <div className='cards-container'>
          <Link to='/startup-sp'>
            <CampainCard />
          </Link >
          <Link to='/startup-sp'>
            <CampainCard />
          </Link>
          <Link to='/startup-sp'>
            <CampainCard />
          </Link>
          <Link to='/startup-sp'>
            <CampainCard />
          </Link>
        </div>
        <div className='total-generated'>
          <div className='total-text'>
            Raising the bar with ID
            <Link to='/subscribe'><button>Explore Deal</button></Link>
          </div>
          <div className='total-amount'>
            <div className='internal-div'>
              <span className='internal-title'>3.5CR+</span>
              <span className='internal-sub-title'>returns from id</span>
            </div>
            <div className='internal-div'>
              <span className='internal-title'>Rs. 50,000+</span>
              <span className='internal-sub-title'>average investment value</span>
            </div>
            <div className='internal-div'>
              <span className='internal-title'>1000+</span>
              <span className='internal-sub-title'>transaction</span>
            </div>
            <div className='internal-div'>
              <span className='internal-title'>0</span>
              <span className='internal-sub-title'>defaults</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Profile