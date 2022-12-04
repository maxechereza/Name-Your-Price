import "./PriceContainer.css";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import thumbImage from "../images/icon-slider.svg";

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
    color: "lightgrey",
    opacity: 1,
    height: 8,
  },
}));

function PriceContainer() {
  return (
    <>
      <div className="PriceContainer">
        <div className="Upper">
          <span>100K PAGEVIEWS</span>
          <span>$16.00</span>
          <span> / month</span>

          <NYPSlider slots={{ thumb: NYPThumbComponent }} defaultValue={20} />
        </div>
      </div>
    </>
  );
}

export default PriceContainer;
