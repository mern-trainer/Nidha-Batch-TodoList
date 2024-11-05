import React from 'react'
import { Link } from 'react-router-dom'

const ProfileUpdate = () => {
  return (
    <div>
          Update Profile Page
          <Link to={"/settings/profile/password"} >Edit</Link>
          <div className='bg-dark'>
              <h2 className='text-light'>Hello</h2>
          </div>
    </div>
  )
}

export default ProfileUpdate
