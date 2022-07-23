import React from 'react'
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  const user = false;
  return (
    <div className="top">
        <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook-square"></i>
        <i className=" topIcon fa-brands fa-twitter-square"></i>
        <i className=" topIcon fa-brands fa-instagram-square"></i>
        <i className=" topIcon fa-brands fa-pinterest-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem">{user && 'LOGOUT'}</li>
            </ul>
        </div>
        <div className="topRight">
            {
              user ? (
                <img className="topImg" src="https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" alt="" />
              ):(
                <ul className="topList">
                  <li className="topListItem">
                    <Link className="link" to="/login">LOGIN</Link> 
                  </li>
                  <li className="topListItem">
                    <Link className="link" to="/register">REGISTER</Link> 
                  </li>
                </ul>
              )
            }
            <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar