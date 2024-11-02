import React from 'react'
import { Link } from 'react-router-dom'

const ProfileUpdate = () => {
  return (
    <div>
          Update Profile Page
          <Link to={"/settings/profile/password"} >Edit</Link>
    </div>
  )
}

export default ProfileUpdate
