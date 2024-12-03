import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export const GetProfile = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  


  const getdata = async () => {
    const res = await axios.get(`${window.API_URL}/api/user/profile`, {
      headers: {
        Authorization: ` Bearer ${localStorage.getItem("token")}`,
      },
    });
    setId(res.data._id);
    setName(res.data.name);
    setEmail(res.data.email);
    setPassword(res.data.password);

   
  };

  const getpost = async () => {
    const res = await axios.get(`${window.API_URL}/api/user/profile/posts`, {
      headers: {
        Authorization: ` Bearer ${localStorage.getItem("token")}`,
      },
    });
      setPosts(res.data)

  }

  useEffect(()=>{
    getdata()
    getpost()
  })

  return (
    <>
        <div> 
            <div className="pprofile">
            <div> name :{name}</div>
          <div> email : {email}</div>
          
            </div>

          <div className="pposts">
            <h1 className="mypostheader">My Posts</h1>
            {posts.map((post) => {
            
                return(
                      
                     <div className="ppostdiv" onClick={() => navigate(`/expandpost/${post._id}`)}>

                        
                    <h1 className="titleall">{post.title}</h1>
                    <p className="contentall"> {post.content}</p>
                    <p>likes : {post.likes}</p>
                    <p>comments : {post.comments}</p>
                    <p className="dateall">date : {new Date(post.date).toDateString()}</p>
                    </div>
                    
                )
              })}
              </div>
        </div>
      
    </>
  );
};

