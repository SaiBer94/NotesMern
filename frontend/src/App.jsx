import React from 'react'
import Home from './Pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/signup' exact element={<SignUp/>}/>
    </Routes>
  </BrowserRouter>
);

function App() {
  

  return (
    <div>
       {routes}
    </div>   
  )
}

export default App
