import { useContext } from 'react'
import { UserContext } from '../UserContext.jsx'
import { Link, useNavigate } from "react-router-dom"
import './DropDown.css'
function DropDownMenu() {
  const navigate = useNavigate()
  const [userfName, setUserfName] = useContext(UserContext)
  const handleLogout = () => {
    navigate('/')
    setUserfName(null)
  }
  return (
    <div>
      <ul className="drop-down">
        <Link to='/profile'><li>Profile</li></Link>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  )
}

export default DropDownMenu