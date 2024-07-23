// PasswordInput.jsx
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import './PasswordInput.css'; // Import the CSS

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="passwordInput-container">
      <input
        className="passwordInput"
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
      />
      {isShowPassword ? (
        <FaRegEye
          className="passwordInput-icon"
          size={27}
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          className="passwordInput-icon"
          size={25}
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default PasswordInput;
