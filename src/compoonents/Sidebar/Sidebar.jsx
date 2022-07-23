import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW89qyhpkzO6Gyy3bnqnAbfrRjz1xyG5rsh1i2tKvKwRKJJpmPhQzThAeTj0rBGz9Qew&usqp=CAU " alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos exercitationem quos dolorem odio deleniti placeat soluta error provident iure adipisci magni alias maiores ad vel distinctio, assumenda voluptatem nihil! Quibusdam.</p>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Code </li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">adventure</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className=" sidebarIcon fa-brands fa-facebook-square"></i>
                <i className=" sidebarIcon fa-brands fa-twitter-square"></i>
                <i className=" sidebarIcon fa-brands fa-instagram-square"></i>
                <i className=" sidebarIcon fa-brands fa-pinterest-square"></i>
            </div>

            </div>
    </div>
  )
}

export default Sidebar