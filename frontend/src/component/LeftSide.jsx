import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import AllPosts from "./Allposts.jsx";
import { GetProfile } from './profilerete';
import Createpost from './createpost';

function LeftSide() {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);

//   useEffect(() => {
//     setContent(<AllPosts />);
//   }, []);

  return (
    <div>
      <div className="leftside">
        <div className="leftbuttons">
          <div  onClick={() =>{ 
            setContent(<AllPosts />)}}>Home</div>
          <div onClick={() => setContent(<GetProfile />)}>Profile</div>
          <div onClick={() => setContent(<div>Settings Page Coming Soon...</div>)}>Settings</div>
          <div onClick={() => {
            localStorage.removeItem("token"); 
            navigate("/signin");
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
