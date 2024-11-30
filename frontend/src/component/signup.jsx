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
    <div className>
      <div className=" flex justify-center mt-32">
        <div>
          <div className="bg-[#e7f0fe] rounded-lg shadow-xl  text-xl font-bold h-96 w-80 ">
            <div className="flex justify-center">Signup</div>
            <div className=" pt-8 flex justify-center">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="name"
              />
            </div>
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
