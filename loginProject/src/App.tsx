import { useState, useEffect } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import './App.css'
import Home from "./components/home.tsx";
import Login from "./components/login.tsx"

function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route 
              path="/"
              element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}
            />
            <Route
              path="/login"
              element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail}/>}
            />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
