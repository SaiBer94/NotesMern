import React, { useState } from 'react'
import {FaRegEye,FaRegEyeSlash} from "react-icons/fa6"

const PasswordInput = ({value, onChange, placeholder}) => {


    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = ()=> {
        setIsShowPassword(!isShowPassword)
    }

  return (
    <div>
      <input 
      className='passwordInput'
      value={value}
      onChange={onChange}
      type={isShowPassword ? "text":"password"}
      placeholder={placeholder || "password"}
       />
       
       {isShowPassword ? (
         <FaRegEye 
         size={27}
         onClick={()=>{toggleShowPassword()}}
         />
       ):(
         <FaRegEyeSlash
         size={25}
         onClick={()=>{toggleShowPassword()}}/>
       )}
    </div>
  )
}

export default PasswordInput
