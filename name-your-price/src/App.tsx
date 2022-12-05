import "./styles/App.css";
import { PriceContainer } from "./components";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Circles">
          <div className="Title">
            <b style={{ fontSize: "xx-large" }}>
              Simple, traffic-basded pricing
            </b>
            <p style={{ fontSize: "large", color: "grey" }}>
              Sign-up for our 30 day trial. No credit card required.
            </p>
          </div>
        </div>
      </div>

      <PriceContainer />
    </div>
  );
}

export default App;
