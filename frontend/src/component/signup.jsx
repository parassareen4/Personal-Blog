import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await axios.post(`${window.API_URL}/api/user/signup`, {
        name: name,
        email: email,
        password: password,
      });

      alert("user have signed up successfully");
      navigate("/signin");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    
  <>
  <div className="signup">
            <button onClick={()=>navigate('/signin')}>Signin</button>
            <div>Signup</div>
            
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="name"
              />
            
            
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email"
              />
            
            
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password"
              />
            
            
              <button
            
                onClick={signup}
              >
                Signup
              </button>
            
          </div>
  </>
          

    
  );
};
