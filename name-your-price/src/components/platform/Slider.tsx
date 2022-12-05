import { styled } from "@mui/material/styles";
import thumbImage from "../../images/icon-slider.svg";
import Slider from "@mui/material/Slider";

const ligth = "hsl(174deg 77% 70%)";
const bold = "hsl(174, 86%, 45%)";

const StyledSlider = styled(Slider)(({}) => ({
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

interface SliderProps {
  scale: (value: number) => number;
  value: number;
  onChange: (event: Event, newValue: number | number[]) => void;
}

function _Slider({ scale, value, onChange }: SliderProps) {
  return (
    <StyledSlider
      onChange={onChange}
      value={value}
      min={0}
      step={1}
      max={100}
      scale={scale}
    />
  );
}

export { _Slider as Slider };
