import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      navigate("/leftside");
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="signin">
      <motion.div
        initial={{ opacity: 0, top: 150 }}
        animate={{ opacity: 1, top: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div>Signin</div>

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

        <button className="btn" onClick={signin}>
          Signin
        </button>
      </motion.div>
    </div>
  );
};
