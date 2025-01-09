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
import { AnimatedComponent } from "./components/Observer";
import { Whitepaper } from "./components/Whitepaper";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <div className="App">
          {/* <AnimatedComponent> */}
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
            </Routes>
          </Router>
          {/* </AnimatedComponent> */}
        </div>
      ) : null}
    </>
  );
}

export default App;
