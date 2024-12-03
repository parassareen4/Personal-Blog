import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, top: 150 }}
          animate={{ opacity: 1, top: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
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
        </motion.div>
      </div>
    </>
  );
};
