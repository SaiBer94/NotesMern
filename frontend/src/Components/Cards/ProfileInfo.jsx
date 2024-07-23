import React from 'react'
import { getInitials } from '../../Utils/helper'

const ProfileInfo = ({onLogout}) => {
  return (
    <div>
      <div>{getInitials("John doe")}</div>
      <div>
        <p>Name</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
}

export default ProfileInfo
