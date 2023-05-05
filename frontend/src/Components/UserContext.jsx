import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider=(props)=>{
  const [userfName, setUserfName] = useState(null)
  const [userlName, setUserlName] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  // const [user, setUser] = useState(null)
  return(
    <UserContext.Provider value={[userfName, setUserfName, userlName, setUserlName, userEmail, setUserEmail]}>
      {props.children}
    </UserContext.Provider>
  )
}
