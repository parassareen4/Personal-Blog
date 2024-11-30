import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./component/signup";
import { Input } from "postcss";
import { InputComp } from "./component/input";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
