import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import './LoginPage.css'
import { UserContext } from '../UserContext.jsx'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[isShown, setIsShown] = useState(false)
  const [error, setError] = useState('')

  const [userfName, setUserfName, userlName, setUserlName, userEmail, setUserEmail] = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogin = async(event)=>{
    setPassword('')
    setError('')
    event.preventDefault()
    Axios.post('http://localhost:3001/login',{
      email: email,
      password: password
    })
    .then((response)=>{
      if(response.data.error){
        setError(response.data.error)
      }
      else{
        console.log(response.data)
        setUserfName(response.data.firstName)
        setUserlName(response.data.lastName)
        setUserEmail(response.data.email)
        navigate('/profile')
      }
    })
    .catch((err)=>{
      console.log(err)
      setError('Something went wrong')
    })
  }

  return (
    <div className='login-page'>
      <p className="login-text">Log in</p>
      <form className='login-form'>
        <input type="email" id='login-email' placeholder='Email'
          onChange={(event)=>{
            setEmail(event.target.value)
          }}
          value={email}
        />
        <input type={isShown?'text':'password'} id='login-password' placeholder='Password'
          onChange={(event)=>{
            setPassword(event.target.value)
          }}
          value={password}
        />
        <span id='password-error-text'>{error}</span>
        <div className='login-form-show-password'>
          <input type='checkbox' id='show-pwd-checkbox' onClick={() => setIsShown(!isShown)}/>
          <span id='show-pwd-text'>Show Password</span>
        </div>
        <hr className='login-line'/>
        <button
          className='login-button'
          onClick={handleLogin}
        >
          Log in
        </button>
      </form>
    </div>
  )
}

export default LoginPage