import React from 'react'
import Home from './Home'
import Signup from './Authentication/Signup'
import Login from './Authentication/Login'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import NotFound from './NotFound'
export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/Notfound' element={<NotFound/>}></Route>
    </Routes>
   </BrowserRouter>
  // <>
  //     <Home/>  
  // </>
  )
}