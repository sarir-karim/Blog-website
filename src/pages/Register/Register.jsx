import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='Register'>
        <form  className="RegisterForm">
            <label>Userame</label>
            <input type="text" className='RegisterInput' placeholder=' Eneter your Name...' />
            <label>Email</label>
            <input type="text" className='RegisterInput' placeholder=' Eneter your Email...' />
            <label>Password</label>
            <input type="Password" className='RegisterInput' placeholder=' Eneter your Password...' /> 

            <button className="RegisterButton">Register</button>
        </form>
            <button className="RegisterLoginButton">
            <Link className='link' to="/login">Login</Link>
            </button>
    </div>
  )
}

export default Register