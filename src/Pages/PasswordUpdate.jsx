import React from 'react'
import { Link } from 'react-router-dom'

const PasswordUpdate = () => {
  return (
    <div>
          Password Update page
          <Link to={"/settings/profile/update"} >Update</Link>
    </div>
  )
}

export default PasswordUpdate
