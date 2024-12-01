import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Signup } from "./component/signup";
import { Signin } from "./component/signin";
import AllPosts from "./component/Allposts.jsx";
import CreatePost from "./component/createpost.jsx";
import { GetProfile } from "./component/profilerete";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/allposts" element={<AllPosts />} />
          <Route path="/createpost" element={<CreatePost />} />

          <Route path="/profile" element={<GetProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
