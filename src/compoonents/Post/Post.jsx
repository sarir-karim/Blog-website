import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'
const Post = () => {
  return (
    <div className='post'>
        <img src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="postImg" />


        <div className="postInfo">
            <div className="postCats">
                <span className="postCate">Music</span>
                <span className="postCate">Code</span>
            </div>

            <span className="postTitle">
                <Link to="/post/:postId" className="link">Lorem ipsum dolor sit amet consectetur </Link>
            </span>

            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis maiores consequuntur veniam hic, sed voluptates corporis, distinctio saepe iste, eveniet ducimus minima aliquid eius! Dicta nobis suscipit placeat, eligendi ut ducimus perspiciatis veniam consequatur inventore in eius pariatur voluptatum assumenda dignissimos laboriosam, nam quod repudiandae officiis officia maxime aspernatur.</p>
        </div>
    </div>
  )
}

export default Post