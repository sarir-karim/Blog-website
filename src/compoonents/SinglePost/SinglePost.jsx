import React from 'react'
import './SinglePost.css'
const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">

            <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='singlePostImg' />

            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash-can"></i>
                </div>
            </h1>

            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>jsalksjd</b></span>
                <span className="singlePostDate"><b>1 hour ago</b></span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto illum vitae blanditiis! Pariatur aperiam atque sequi ut veniam sed perspiciatis neque quos eum eaque cum, harum, amet hic! Omnis quam vitae reiciendis autem, porro illo quo ipsa odio ex id perferendis itaque totam nesciunt, illum ducimus. Qui, placeat pariatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto illum vitae blanditiis! Pariatur aperiam atque sequi ut veniam sed perspiciatis neque quos eum eaque cum, harum, amet hic! Omnis quam vitae reiciendis autem, porro illo quo ipsa odio ex id perferendis itaque totam nesciunt, illum ducimus. Qui, placeat pariatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto illum vitae blanditiis! Pariatur aperiam atque sequi ut veniam sed perspiciatis neque quos eum eaque cum, harum, amet hic! Omnis quam vitae reiciendis autem, porro illo quo ipsa odio ex id perferendis itaque totam nesciunt, illum ducimus. Qui, placeat pariatur.


            </p>
        </div>
    </div>
  )
}

export default SinglePost