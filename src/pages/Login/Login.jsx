import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <form  className="loginForm">
            <label>Email</label>
            <input type="text" className='loginInput' placeholder=' Eneter your Email...' />
            <label>Password</label>
            <input type="Password" className='loginInput' placeholder=' Eneter your Password...' /> 

            <button className="loginButton">Login</button>
        </form>
            <button className="loginRegisterButton">
              <Link className='link' to="/register">Register</Link>
            </button>
    </div>
  )
}

export default Login