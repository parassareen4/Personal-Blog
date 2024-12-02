import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllPosts from "./Allposts.jsx";

function LeftSide() {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);

  return (
    <div>
      <div className="leftside">
        <div className="leftbuttons">
          {/* Use a function in onClick */}
          <div onClick={() => setContent(<AllPosts />)}>Home</div>
          <div onClick={() => setContent(<div>Profile Page Coming Soon...</div>)}>Profile</div>
          <div onClick={() => setContent(<div>Settings Page Coming Soon...</div>)}>Settings</div>
          <div onClick={() => {
            localStorage.removeItem("token"); // Handle logout logic
            navigate("/login");
          }}>Logout</div>
          <div onClick={() => setContent(<div>Create Post Page Coming Soon...</div>)}>Create Post</div>
        </div>
      </div>
      
      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default LeftSide;
