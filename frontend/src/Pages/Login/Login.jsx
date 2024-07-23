import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../Components/Password/PasswordInput'
import { validateEmail } from '../../Utils/helper'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)

  const handleLogin = async (e) =>{
    e.preventDefault();

    if(!validateEmail(email)) {
      setError("Please enter  a valid email address")
      return;
    } 

    if(!password) {
      setError("Please enter your password");
      return;
    }

    setError("")

  };

  return (
  <>
    <Navbar/>

    <div>
      <div>
        <form action="" onSubmit={handleLogin}>
          <h4>Login</h4>
          <input
            className='emailInput'
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />

          <PasswordInput
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          />

          <p>{error}</p>

          <button type='submit'>Login</button>

          <p>Not Registered yet? <Link to={'/signup'}>create Accout!</Link></p>
        </form>
      </div>
    </div>
  </>
  )
}

export default Login
