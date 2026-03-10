import React from 'react'
import { UserContext } from './UserContext'
import {useState} from 'react'

function UserContextProvider({children}) {
const [users,setUsers] = useState({
    name : "ravi",
    age : 20,
    city : "Hyderabad"
})
    const changeUser = () => {
        setUsers({...users,age : 22});
    }
  return (
    <div>
        <UserContext.Provider value={{users,changeUser}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider