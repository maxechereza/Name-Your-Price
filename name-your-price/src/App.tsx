import React from "react";

//stylesheets
import "./App.css";

//fonts
import "./fonts/Manrope-Light.ttf";

//components
import PriceContainer from "./components/PriceContainer";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Circles">
          <p style={{ fontSize: "x-large" }}>Simple, traffic-basded pricing</p>
          <p style={{ fontSize: "large" }}>
            Sign-up for our 30 day trial. No credit card required.
          </p>
        </div>
      </div>

      <PriceContainer />
    </div>
  );
}

export default App;
