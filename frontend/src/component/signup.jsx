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

      navigate("/signin");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="signup">
        <div>
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
          <div>
            <button className="signup-btn" onClick={signup}>
              Signup
            </button>
            <span className="or-span">or</span>
            <button className="signup-btn" onClick={() => navigate("/signin")}>
              Signin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
