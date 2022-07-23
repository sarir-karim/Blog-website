import React from 'react'
import Header from '../../compoonents/Header/Header'
import Posts from '../../compoonents/Posts/Posts'
import Sidebar from '../../compoonents/Sidebar/Sidebar'
import './Home.css'
const Home = () => {
  return (
    <>
    <Header/>
    <div className="home">
      <Posts/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Home