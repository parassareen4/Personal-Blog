import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./component/signup";
import { Signin } from "./component/signin";
import { GetProfile } from "./component/profilerete";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<GetProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
