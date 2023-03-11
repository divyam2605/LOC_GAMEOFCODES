import SignupPage from "../src/pages/signupPage";
import LoginSignup from "../src/pages/login_signup";
import Blogs from "./pages/blog/Blog";

import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Side from "./components/Side";

function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };
  return (
    <Router>
      <div className="App">
        
        <Routes>

          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/" element={<LandingPage />} />
         
          
 
      </Routes> 
      
      </div>
    </Router>
  );
}

export default App;
