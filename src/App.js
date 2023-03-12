import SignupPage from "../src/pages/signupPage";
import LoginSignup from "../src/pages/login_signup";
import Blog from "./pages/blog/Blog";

import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Side from "./components/Side";
import ProfileC from "./pages/ProfileC";
import ProfileR from "./pages/ProfileR";
import Nav from "./components/Nav";
import Recruiter from "./pages/Recruiter";
import Candidate from "./pages/Candidate";
import Nav1 from "./components/Nav1";
import Chat from "./components/Chat";
import FAQ from "./pages/Faq";

function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };
  return (
    <Router>
      <div className="App">
      {/* <Chat/> */}
         <Routes>
          
          <Route path="/login" element={<LoginSignup />} />
           <Route path="/signup" element={<SignupPage />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/" element={<LandingPage />} />
           {/* <Route path="/" element={<Nav1 />} /> */}
           <Route path="/profiler" element={<ProfileR />} />
           <Route path="/profilec" element={<ProfileC />} />
           <Route path="/candidate" element={<Candidate />} />
           <Route path="/recruiter" element={<Recruiter/>} />
           <Route path="/faq" element={<FAQ/>} />
           
      
 
           
      </Routes> 
      

    </div>
    </Router>
    
  );
}

export default App;
