import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Landing } from "./pages/Landing";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
          </Router>
        </div>
      ) : null}
    </>
  );
}

export default App;
