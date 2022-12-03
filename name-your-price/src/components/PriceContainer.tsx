import "./PriceContainer.css";
import Slider from "@mui/material/Slider";

function PriceContainer() {
  return (
    <>
      <div className="PriceContainer">
        <div className="Upper">
          <span>100K PAGEVIEWS</span>
          <span>$16.00</span>
          <span> / month</span>
          <Slider
            value={
              30
            } /*onChange={handleChange}*/ /*disabled*/ /*color="secondary"*/
          />
        </div>
      </div>
    </>
  );
}

export default PriceContainer;
