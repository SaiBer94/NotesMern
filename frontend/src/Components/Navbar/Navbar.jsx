import React from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {

    const navigate = useNavigate;

    const onLogout = () => {
        navigate("/login")
    }

  return (
    <div>
      <h2>Your Dairy</h2>
      <h4>Take notes!</h4>

      <SearchBar/>

      <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar
