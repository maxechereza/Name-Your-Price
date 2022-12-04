import React from "react";
import "./PriceContainer.css";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import thumbImage from "../images/icon-slider.svg";
import useToggle from "../hooks/useToggle";

interface NYPThumbComponentProps extends React.HTMLAttributes<unknown> {}

function NYPThumbComponent(props: NYPThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="Thumb" />
    </SliderThumb>
  );
}

const ligth = "hsl(174deg 77% 70%)";
const bold = "hsl(174, 86%, 45%)";

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

//helper function
function ensure<T>(
  argument: T | undefined | null,
  message: string = "This value was promised to be there."
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}

function scale(value: number) {
  const previousMarkIndex = Math.floor(value / 25);
  const previousMark = pageViewMarkers[previousMarkIndex];
  const remainder = value % 25;
  if (remainder === 0) {
    return previousMark.scaledValue;
  }

  return pageViewMarkers[previousMarkIndex + 1].scaledValue;
}

const NYPSlider = styled(Slider)(({}) => ({
  color: `${ligth}`,
  padding: "50px 0",
  "& .MuiSlider-thumb": {
    height: 35,
    width: 35,
    backgroundColor: `${ligth}`,
    border: "1px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: `5px 7px 15px 5px ${ligth}`,
      backgroundColor: `${bold}`,
      cursor: "grabbing",
    },
    backgroundImage: `url(${thumbImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer",
  },
  "& .MuiSlider-track": {
    height: 6,
  },
  "& .MuiSlider-rail": {
    color: "hsl(224, 65%, 95%)",
    opacity: 1,
    height: 8,
  },
}));

const NYPSwitch = styled(Switch)(({}) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "hsl(224, 65%, 95%)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 14,
    height: 14,
    borderRadius: 7,
    marginTop: "1px",
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: "hsl(224, 65%, 95%)",
    boxSizing: "border-box",
  },
  "&:hover": {
    "& .MuiSwitch-track": {
      backgroundColor: `${ligth}`,
    },
  },
}));

function PriceContainer() {
  const [isMonthlyBilling, setIsMonthlyBilling] = useToggle();
  const [sliderValue, setSliderValue] = React.useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setSliderValue(newValue);
    }
  };

  const pageviews = ensure(
    pageViewMarkers.find((x) => x.scaledValue === scale(sliderValue))
  );

  const label = pageviews.label;
  const price = isMonthlyBilling
    ? pageviews.price - pageviews.price * 0.25
    : pageviews?.price;

  return (
    <>
      <div className="PriceContainer">
        <div className="UpperSection">
          <div className="PriceSummary">
            <b style={{ color: "hsl(225, 20%, 60%)", fontStretch: "expanded" }}>
              {label} PAGEVIEWS
            </b>
            <div>
              <b style={{ color: "hsl(227, 35%, 25%)", fontSize: "xx-large" }}>
                {`$${price}.00`}
              </b>
              <b style={{ color: "hsl(225, 20%, 60%)" }}> / month</b>
            </div>
          </div>

          <NYPSlider
            slots={{ thumb: NYPThumbComponent }}
            onChange={handleChange}
            value={sliderValue}
            min={0}
            step={1}
            max={100}
            scale={scale}
          />

          <div className="Billing">
            <b style={{ color: "hsl(225, 20%, 60%)", fontSize: "small" }}>
              Monthly Billing
            </b>
            <NYPSwitch
              value={isMonthlyBilling}
              onChange={setIsMonthlyBilling}
            />
            <b style={{ color: "hsl(225, 20%, 60%)", fontSize: "small" }}>
              Year Billing
            </b>
            <b
              style={{
                color: "hsl(15, 100%, 70%)",
                fontSize: "x-small",
                backgroundColor: "hsl(14, 92%, 95%)",
                borderRadius: "20px",
                padding: "1% 1% 1% 1%",
                margin: "0% 0% 0% -3%",
              }}
            >
              25% discount
            </b>
          </div>
        </div>
        <div className="DownSection">
          <ul className="List">
            <li className="ListItem">Unlimited websites</li>
            <li className="ListItem">100% data ownership</li>
            <li className="ListItem">Email reports</li>
          </ul>
          <button className="Button">Start my trial</button>
        </div>
      </div>
    </>
  );
}

export default PriceContainer;
