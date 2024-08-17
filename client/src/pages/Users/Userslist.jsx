import React from 'react'
import './Users.css'
import User from './User'
import {useSelector} from "react-redux"
const Userslist = () => {
    const users=null
    console.log(users)
  return (
    <div className="user-list-container">
        {users.map((user)=>(
            <User user={user} key={user?._id}/>
        ))}
    </div>
  )
}

export default Userslist