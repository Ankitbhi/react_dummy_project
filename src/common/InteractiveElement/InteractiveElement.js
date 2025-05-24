import { ButtonBase } from "@mui/material";
import "./InteractiveElement.css";

const InteractiveElement = ({ children, onClick, className = "", sx = {} }) => {
  return (
    <ButtonBase
      className={`interactive-element ${className}`}
      onClick={onClick}
      sx={{ ...sx }}
    >
      {children}
    </ButtonBase>
  );
};

export default InteractiveElement;

