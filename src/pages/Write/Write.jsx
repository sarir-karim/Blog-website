import React from 'react'
import './Write.css'

const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src="https://images.pexels.com/photos/887353/pexels-photo-887353.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </div>

    </div>
  )
}

export default Write