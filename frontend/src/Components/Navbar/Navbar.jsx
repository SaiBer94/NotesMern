import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate;

    const onLogout = () => {
        navigate("/login")
    }

    const handleSearch = () => {

    }

    const onClearSearch = () => {
        setSearchQuery("");
    }

  return (
    <div>
      <h2>Your Dairy</h2>
      <h4>Take notes!</h4>

      <SearchBar 
         value={searchQuery}
         onChange={({target}) => {
            setSearchQuery(target.value)
         }}
         handleSearch={handleSearch}
         onClearSearch={onClearSearch}
      
      />

      <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar
