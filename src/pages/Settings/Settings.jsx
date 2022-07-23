import React from 'react'
import './Settings.css'
import Sidebar from  '../../compoonents/Sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
           <div className="settingsTitle">
           <div className="settingsUpdateTitle">Update Your Account</div>
            <div className="settingsDeleteTitle">Delete Account</div>
           </div>
        
        <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className='settingsPP'>
                <img className='settingsImg' src="https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg" alt="" />

                <label htmlFor="fileInput">
                <i className=" settingsPPIcon fa-solid fa-circle-user"></i>

                </label>
                <input type="file" id='fileInput' style={{display:'none'}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder='sarir@gmailcom' />
            <label>Email</label>
            <input type="text" placeholder='sarir@gmailcom' />
            <label>Password</label>
            <input type="text" placeholder='password' />
            <button className="settingsSubmit">Update</button>
        </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings