import React from 'react'
import Sidebar from '../../compoonents/Sidebar/Sidebar'
import SinglePost from '../../compoonents/SinglePost/SinglePost'
import './Single.css'
const Single = () => {
  return (
    <div className="single">Single
        <SinglePost/>
      
        <Sidebar/>
    </div>
  )
}

export default Single