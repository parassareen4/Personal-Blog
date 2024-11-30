import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./component/signup";
import { Signin } from "./component/signin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
