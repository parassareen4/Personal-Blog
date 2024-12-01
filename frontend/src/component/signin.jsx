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
      navigate("/profile");
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" flex justify-center mt-32">
        <div>
          <div className="bg-[#e7f0fe] rounded-lg shadow-xl  text-xl font-bold h-96 w-80 ">
            <div className="flex justify-center">Signin</div>

            <div className=" pt-8 flex justify-center">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email"
              />
            </div>
            <div className=" pt-8 flex justify-center">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password"
              />
            </div>
            <div className="flex justify-center pt-6">
              <button
                className="  bg-blue-500 px-5 py-2 rounded-md text-white hover:bg-blue-600 active:bg-orange-500"
                onClick={signin}
              >
                Signin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
