import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllPosts from "./Allposts.jsx";
import { GetProfile } from './profilerete';
import Createpost from './createpost';

function LeftSide() {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);

  return (
    <div>
      <div className="leftside">
        <div className="leftbuttons">
          {/* Use a function in onClick */}
          <div onClick={() => setContent(<AllPosts />)}>Home</div>
          <div onClick={() => setContent(<GetProfile />)}>Profile</div>
          <div onClick={() => setContent(<div>Settings Page Coming Soon...</div>)}>Settings</div>
          <div onClick={() => {
            localStorage.removeItem("token"); // Handle logout logic
            navigate("/login");
          }}>Logout</div>
          <div onClick={() => setContent(<Createpost />)}>Create Post</div>
        </div>
      </div>
      
      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default LeftSide;
