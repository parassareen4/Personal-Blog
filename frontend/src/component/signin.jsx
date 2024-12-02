import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signin = async () => {
    try {
      const res = await axios.post(`${window.API_URL}/api/user/login`, {
        email: email,
        password: password,
      });
      localStorage.setItem("token", res.data.token);
      alert("u have logged in successfully");
      navigate("/leftside");
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
 
          <div className="signin">
            <div >Signin</div>

            
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
                onClick={signin}
              >
                Signin
              </button>
            
          </div>

  );
};
