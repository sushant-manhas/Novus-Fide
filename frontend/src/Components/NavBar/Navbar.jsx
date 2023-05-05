import { useContext,useState } from 'react'
import { 
  Link,
  Outlet,
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { UserContext } from '../UserContext.jsx'
import DropDownMenu from './DropDownMenu'

export default function Navbar() {
  const [userfName] = useContext(UserContext)
  const [openMenu, setOpenMenu] = useState(false)


  return (
    <>
    <header className='navbar'>
      <Link to='/' className='logo'>
        <FontAwesomeIcon className='icon' icon={faRocket} style={{color: '#29fd53'}} />
        <span>Novus Fide</span>
      </Link>

      {
        userfName ?
        (
          <ul className='nav-links'>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/subscribe'>Explore</Link></li>
          </ul>)
        :
        (
          <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/startup'>Fund your startup</Link></li>
          </ul>
        )
      }
      

      {
        userfName ?
        (
          <div className='user-click'>
            <span className='logged-user-name'>{userfName}</span>
            <FontAwesomeIcon
              className='user-icon'
              icon={faUser}
              style={{color: "#29fd53",}} 
              onClick={() => setOpenMenu(!openMenu)}
            />
            {openMenu ? <DropDownMenu />: null}
          </div>
        )
        :
        (<div className='sign-up'>
            <Link to='/login' id='login-btn'>Login</Link>
            <Link to='/signup' id='get-started-btn'>Get Started</Link>
          </div>
        )
      }
    </header>
    <Outlet />
    </>
  );
}
