import Todo from "./components/Todo";
import React, { useState } from "react";
import './App.css';
import Signin from "./components/Signin";
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  
  

  return (
    <Router>
    <div className="App">
     <> 
     <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/todo" element={ <Todo/> } />
     </Routes>
     
      
      
    </>
    </div>
    </Router>
  );
}

export default App;
