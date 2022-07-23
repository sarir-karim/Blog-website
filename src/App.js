import React from "react";
import Topbar from "./compoonents/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Settings from "./pages/Settings/Settings";
import Write from "./pages/Write/Write";
import SinglePost from "./compoonents/SinglePost/SinglePost";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <>
      <Router>
      <Topbar />  

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/register" element={user? <Home/> :<Register/>}/>
        <Route path="/login" element={user? <Home/> :<Login/>}/>
        <Route path="/write" element={user ? <Write/>: <Register/>}/>
        <Route path="/settings" element={user ?<Settings/>: <Register/>}/>
        <Route path="/post/:postId" element={<SinglePost/>}/>
      </Routes>
      {/* <Register/> */}
      </Router>
    </>
  );
}

export default App;
