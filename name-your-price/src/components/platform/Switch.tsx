import { ChangeEvent } from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const primary = "hsl(174deg 77% 70%)";
const secondary = "hsl(224, 65%, 95%)";

const StyledSwitch = styled(Switch)(({}) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
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
    backgroundColor: `${secondary}`,
    boxSizing: "border-box",
  },
  "&:hover": {
    "& .MuiSwitch-track": {
      backgroundColor: `${primary}`,
    },
  },
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: `${primary}`,
      },
    },
  },
}));

interface SwitchProps {
  checked: boolean;
  setChecked: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

function _Switch({ checked, setChecked }: SwitchProps) {
  return <StyledSwitch checked={checked} onChange={setChecked} />;
}

export { _Switch as Switch };
