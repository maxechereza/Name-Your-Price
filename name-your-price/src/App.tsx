import "./styles/App.css";
import { PriceContainer } from "./components";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Title">
          <b>Simple, traffic-based pricing</b>
          <div className="MobileTitle">
            <p>Sign-up for our 30 day trial.</p>
            <p>No credit card required.</p>
          </div>
          <div className="DesktopTitle">
            <p>Sign-up for our 30 day trial. No credit card required.</p>
          </div>
        </div>
      </div>

      <PriceContainer />
    </div>
  );
}

export default App;
