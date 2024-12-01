import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div >
      <div >
        <div>
          <div>
            <div>Signup</div>
            <div>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="name"
              />
            </div>
            <div >
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email"
              />
            </div>
            <div >
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password"
              />
            </div>
            <div >
              <button
            
                onClick={signup}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
