import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import Jobs from "./Components/Jobs/Jobs";
import AddJob from "./Components/AddJob/AddJob";
import ApplyJob from "./Components/ApplyJob/ApplyJob";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/contactUs" element={<ContactUs/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/addJob" element={<AddJob/>}/>
            <Route path="/applyjob/:id" element={<ApplyJob/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
