
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import UploadResume from "./Components/PdfUpload";
import EnterDetailsForm from "./Components/DetailsForm";

import "./App.css";
import Dashboard from "./Components/DashBoard";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <Navbar />
        <main className="flex-grow">
          
          <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login/>}/>
           <Route path="/signup" element={<SignUp/>}/>
           <Route path="/desboard" element={<Dashboard/>}/>
            <Route path="/pdfupload" element={<UploadResume/>} />
            <Route path="/details" element={<EnterDetailsForm/>} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
