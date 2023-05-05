import { Link } from 'react-router-dom'
import Card from '../CardComponent/Card'
import Footer from '../LandingSection/Footer'
import './StartupPage.css'


function StartupPage({Name}) {
  return (
    <div>
    <div className='specific-startup'>
      <div className='startup-name'>
        <h1>Welcome</h1>
        <p className='startup-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus atque fugit ipsa iusto dolorem quod</p>
        <div className='highlights-container'>
          <span className='startup-highlight'>2.5Mn+ users</span>
          <span className='startup-highlight'>Fintech</span>
          <span className='startup-highlight'>PAT positive</span>
        </div>
        <div className='startup-data'>
          <div className="data-container">
            <div className='data-information'>
              <h1 className='data-title'>27</h1>
              <p className='data-desc'>Subsribers</p>
            </div>
            <div className='data-information'>
              <h1 className='data-title'>6 days</h1>
              <p className='data-desc'>left to subscribe</p>
            </div>
            <div className='data-information'>
              <h1 className='data-title'>23.50%</h1>
              <p className='data-desc'>of goal achieved</p>
            </div>
          </div>
          <iframe src="https://youtu.be/vYDnJm9C0Vo" title="description" className='pitch-video'/>
        </div>
        <Link to='/payment'><button className='sub-btn'>Subscribe</button></Link>
        <div className='start-points'>
          <p className='start-points-title'>Highlight</p>
          <div className='highlight-stack'>
            {/* <Card /> */}
            {/* <Card /> */}
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default StartupPage