import "../styles/PriceContainer.css";
import { useSlider, useSwitch } from "../hooks";
import { Slider, Switch } from "./platform";

const pageViewMarkers = [
  {
    value: 0,
    scaledValue: 10000,
    label: "10K",
    price: 8,
  },
  {
    value: 25,
    scaledValue: 50000,
    label: "50K",
    price: 12,
  },
  {
    value: 50,
    scaledValue: 100000,
    label: "100K",
    price: 16,
  },
  {
    value: 75,
    scaledValue: 500000,
    label: "500K",
    price: 24,
  },
  {
    value: 100,
    scaledValue: 1000000,
    label: "1M",
    price: 36,
  },
];

function PriceContainer() {
  const [scale, scaledValue, value, onChange] = useSlider(pageViewMarkers);
  const [isMonthlyBilling, setIsMonthlyBilling] = useSwitch();

  const label = scaledValue.label;
  const price = isMonthlyBilling
    ? scaledValue.price - scaledValue.price * 0.25
    : scaledValue.price;

  return (
    <div className="PriceContainer">
      <div className="UpperSection">
        <div className="PriceSummary">
          <b className="CommonText ExpandedCommonText">{label} PAGEVIEWS</b>
          <div>
            <span className="CommonText xxLargeCommonText">{`$${price}.00`}</span>
            <span className="CommonText"> / month</span>
          </div>
        </div>

        <Slider scale={scale} value={value} onChange={onChange} />

        <div className="Billing">
          <span className="CommonText SmallCommonText">Monthly Billing</span>

          <Switch checked={isMonthlyBilling} setChecked={setIsMonthlyBilling} />

          <span className="CommonText SmallCommonText">Year Billing</span>
          <span className="CommonText Discount">25% discount</span>
        </div>
      </div>
      <div className="DownSection">
        <ul className="List CommonText SmallCommonText">
          <li className="ListItem">Unlimited websites</li>
          <li className="ListItem">100% data ownership</li>
          <li className="ListItem">Email reports</li>
        </ul>
        <button className="Button">Start my trial</button>
      </div>
    </div>
  );
}

export { PriceContainer };
