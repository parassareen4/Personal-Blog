import axios from "axios";
import { useEffect, useState } from "react";

export const GetProfile = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);


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


        <div>
          <div>id: {id}</div>
          <div> name :{name}</div>
          <div> email : {email}</div>
          <div>pass : {password}</div>
          <div>{posts.map((post)=>{
            return(
              <div className="mainallposts" >
                <div className="allposts">
                <div> name :{post.content}</div>
                <div> email : {post.title}</div>
                <div>pass : {post.date}</div>
                </div>
                
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </>
  );
};

