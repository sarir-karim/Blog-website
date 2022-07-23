import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <div className="headerTitleSm"> React & node</div>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className='headerImg' src="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

export default Header