import { useState,useContext } from 'react'
import Axios from 'axios'
import { UserContext } from '../UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import './GettingStarted.css'


function SignUpPage(){
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [genericError, setGenericError] = useState('')
  const [userfName, setUserfName, userlName, setUserlName, userEmail, setUserEmail] = useContext(UserContext)

  const[isShown, setIsShown] = useState(false)
  const navigate = useNavigate()

  const signUpSubmit = async(event)=>{
    setGenericError('')
    setPassword('')
    event.preventDefault()
    Axios.post('http://localhost:3001/get-started',{
      fname: fname,
      lname: lname,
      email: email,
      password: password
    })
    .then((response)=>{
      if(response.data.error){
        setGenericError(response.data.error)
      }
      else{
        console.log("response data is "+response.data)
        setUserfName(fname)
        setUserlName(lname)
        setUserEmail(email)
        navigate('/profile')
      }
    })
    .catch((err)=>{
      console.log(err)
      setGenericError('Something went wrong')
    })
  }

  return (
    <div className='getting-start-page'>
      <p className='getting-start-text'>Get Started</p>
      <form className='getting-start-form'>
        <input type='text' placeholder='First Name' id='fname'
          onChange={(e)=>{
            setFname(e.target.value)
          }} value={fname}
        />
        <input type='text' placeholder='Last Name' id='lname'
          onChange={(e)=>{
            setLname(e.target.value)
          }}
          value={lname}
        />
        <input type='email' placeholder='Email' id='getting-start-email'
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          value={email}
        />
        {/* <span id='getting-start-email-error'>{emailError}</span> */}
        <input type={isShown?'text':'password'} placeholder='Password' id='getting-start-pwd'
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          value={password}
          />
        <span id='getting-start-generic-error'>{genericError}</span>
        <div className='getting-start-form-show-password'>
          <input type='checkbox' id='getting-start-show-pwd-checkbox' onClick={() => setIsShown(!isShown)}/>
          <span id='show-pwd-text'>Show Password</span>
        </div>
        <hr className='get-started-line'/>
        <button
          className='get-started-button'
          onClick={signUpSubmit}
        >
          Get Started
        </button>
      </form>
    </div>
  )
}

export default SignUpPage