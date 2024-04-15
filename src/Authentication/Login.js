import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {console.log(result)
        if(result.data === "Success")
        {
          navigate('/home')
        }
        else
        {
          navigate('/Notfound')
        }
        })
        .catch(err=>console.log(err))
    };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">  
        <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" placeholder='Enter your email' autoComplete='off' name='email' className='form-control rounded-0'onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input type="password" placeholder='Enter the password' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}  required/>
                </div>
                <button  type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                </form>
                <p>Are you a new user </p>
                <Link to='/register' type="button" className="btn btn-dark w-100 rounded-0">Register</Link>
            </div>    
    </div>
  )
}
