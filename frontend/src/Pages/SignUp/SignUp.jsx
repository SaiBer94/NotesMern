import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import PasswordInput from '../../Components/Password/PasswordInput';
import { validateEmail } from '../../Utils/helper';

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)

  const handleSignUp = async(e) =>{
    e.preventDefault();
    if(!name) {
      setError("Please enter Name")
      return;
    }
    if(!validateEmail(email)) {
      setError("Invalid email!")
      return;
    }

    if(!password) {
      setError("Please enter Password")
      return;
    }

    setError("");
  }

  return (
    <>
      <Navbar/>
      <div>
        <div>
          <form onSubmit={handleSignUp}>
            <h4>Sign Up</h4>

            <input
               className='nameInput'
               type="text"
               placeholder='Name'
               value={name}
               onChange={(e)=> setName(e.target.value)}
             />

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

            <button type='submit'>Sign Up</button> 

            <p>Already Registered? <Link to={'/login'}>Log In!</Link></p>
          </form>

        </div>
      </div>
    </>
  )
}

export default SignUp
